import { hashSync } from 'bcryptjs';
export const sampleData = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: hashSync('123456'),
      role: 'admin',
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: hashSync('123456'),
      role: 'user',
    },
  ],
};
