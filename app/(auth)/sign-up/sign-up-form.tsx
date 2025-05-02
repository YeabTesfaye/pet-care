'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signUpUser } from '@/lib/actions/user.actions';
import { signUpDefaultValues } from '@/lib/constant';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const SignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: '',
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '';

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? 'Submitting...' : 'Sign Up'}
      </Button>
    );
  };

  // Helper function to split error messages into an array
  const getErrorMessages = (message: string) => {
    return message.split('.').filter((msg) => msg.trim() !== '');
  };

  return (
    <Card>
      <form action={action}>
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Create a new account to get started with PetCare.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              defaultValue={data?.values?.name ?? signUpDefaultValues.name}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              defaultValue={data?.values?.email ?? signUpDefaultValues.email}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              defaultValue={
                data?.values?.password ?? signUpDefaultValues.password
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              defaultValue={
                data?.values?.confirmPassword ??
                signUpDefaultValues.confirmPassword
              }
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <SignUpButton />
          {data && data.message && (
            <div
              className={`text-center ${
                data.success ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {/* Display each error message as a list item */}
              <ul>
                {getErrorMessages(data.message).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link
              href="/sign-in"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign in
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignUpForm;
