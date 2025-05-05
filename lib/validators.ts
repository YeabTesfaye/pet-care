import { z } from 'zod';

// Schema for signing users in
export const signInFormSchema = z.object({
  email: z.string().trim().email('Please provide a valid email address'),
  password: z.string().trim().min(6, 'Password must be at least 6 characters'),
});

// Schema for signing up a user
export const signUpFormSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name must be at least 3 characters')
      .regex(/^[a-zA-Z\s]+$/, {
        message: 'Name must contain only letters and spaces',
      }),
    email: z
      .string()
      .min(3, 'Email Must be at least 3 characters')
      .email('Please provide a valid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(
        /[^A-Za-z0-9]/,
        'Password must contain at least one special character',
      ),
    confirmPassword: z
      .string()
      .min(8, 'Confirm password must be at least 8 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

// ForgotPassword
export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});
