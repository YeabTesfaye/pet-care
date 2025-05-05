import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import { compare } from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import authConfig from './auth.config';
import { prisma } from './lib/prisma';

import { signInFormSchema } from './lib/validators';
import { getUserByEmail, getUserByUserId } from './lib/actions/user.actions';

export const config = {
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },
  session: {
    strategy: 'jwt' as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        // Validate the credentials using the schema
        const validatedFields = signInFormSchema.safeParse(credentials);

        if (!validatedFields.success) {
          return null; // Return null for invalid credentials
        }

        const { email, password } = validatedFields.data;

        // Fetch user from the database
        const user = await getUserByEmail(email);

        if (!user || !user.password) {
          throw new Error('Invalid email or password');
        }

        const isMatch = await compare(password, user.password);
        if (isMatch) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    ...authConfig,
    async session({ session, token }: any) {
      session.user.id = token.sub;
      session.user.name = token.name;
      session.user.role = token.role;

      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.role = user.role;

        if (user.name === 'NO_NAME') {
          token.name = user.email!.split('@')[0];

          // Only run this on initial sign-in
          try {
            await prisma.user.update({
              where: { id: user.id },
              data: { name: token.name },
            });
          } catch (err) {
            console.error('Failed to update user name:', err);
          }
        } else {
          token.name = user.name;
        }
      }

      return token;
    },
    async signIn({ user }: any) {
      const userExist = await getUserByUserId(user.id);
      if (userExist) return true;
      return false;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
