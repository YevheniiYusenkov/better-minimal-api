import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostgresConfigService {
  constructor(private readonly configService: ConfigService) {}

  get type(): 'postgres' {
    return this.configService.get<string>('postgres.type') as 'postgres';
  }

  get host(): string {
    return this.configService.get<string>('postgres.host');
  }

  get port(): number {
    return parseInt(this.configService.get<string>('postgres.port'));
  }

  get username(): string {
    return this.configService.get<string>('postgres.username');
  }

  get password(): string {
    return this.configService.get<string>('postgres.password');
  }

  get database(): string {
    return this.configService.get<string>('postgres.database');
  }
}
