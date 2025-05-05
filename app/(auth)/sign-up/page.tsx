import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import SignUpForm from './sign-up-form';
import Link from 'next/link';
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'Sign Up',
};

export default async function SignUpPage(props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) {
  const session = await auth();

  const { callbackUrl } = await props.searchParams;

  if (session) {
    return redirect(callbackUrl || '/');
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Link href={'/'} className="flex-center">
            <Image
              src="/images/logo.webp"
              className="rounded-md"
              alt=""
              height={100}
              width={100}
            />
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your information below to create your account
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}
