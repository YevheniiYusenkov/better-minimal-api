import { registerAs } from '@nestjs/config';

export default registerAs('postgres', () => ({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || '5432',
  username: process.env.POSTGRES_USER || 'admin',
  password: process.env.POSTGRES_PASS || 'admin',
  database: process.env.POSTGRES_DB || 'db',
}));
