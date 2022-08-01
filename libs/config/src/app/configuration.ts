import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: process.env.PORT || 3000,
  prefix: process.env.PREFIX || 'api',
}));
