'use server';
import { signIn, signOut } from '@/auth';
import { signInFormSchema, signUpFormSchema } from '../validators';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { hash } from '@/lib/encrypt';
import { prisma } from '@/lib/prisma';
import { formatError } from '@/lib/utils';

// Sign in the user with credentials
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData,
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', user);
    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: 'Invalid email or password' };
  }
}

// Sign up user
export async function signUpUser(prevState: unknown, formData: FormData) {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    });

    const plainPassword = user.password;
    user.password = await hash(plainPassword);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    await signIn('credentials', {
      email: user.email,
      password: plainPassword,
    });

    return { success: true, message: 'User registered successfully!' };
  } catch (error) {
    if (isRedirectError(error)) throw error;

    return {
      success: false,
      message: formatError(error),
      values: {
        name: String(formData.get('name') || ''),
        email: String(formData.get('email') || ''),
        password: String(formData.get('password') || ''),
        confirmPassword: String(formData.get('confirmPassword') || ''),
      },
    };
  }
}

// Get user by Id
export async function getUserByUserId(userid: string) {
  const user = await prisma.user.findUnique({
    where: { id: userid },
  });
  if (!user) throw new Error('User not found');
  return user;
}

// Get user by email
export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}

// Sign the user out
export async function SignOutUser() {
  await signOut();
}
