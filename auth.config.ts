import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';

export default {
  providers: [GitHub, Google],

  callbacks: {
    authorized({ request, auth }: any) {
      const protectedPaths = [/\admin/];

      // Get pathname from the req url object
      const { pathname } = request.nextUrl;
      // Check if user is not authenticated and accessing a protected path
      if (!auth && protectedPaths.some((p) => p.test(pathname))) return false;

      const response = NextResponse.next({
        request: {
          headers: new Headers(request.headers),
        },
      });

      return response;
    },
  },
} satisfies NextAuthConfig;
