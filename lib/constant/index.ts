export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Pet Care';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

export const signInDefaultValues = {
  email: 'admin',
  password: 'Pass@123',
};
export const signUpDefaultValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  
};
