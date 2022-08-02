import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET || '10ykzE01UhNz',
  expires: process.env.JWT_EXPIRES || '1h',
}));
