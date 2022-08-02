import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { BcryptConfigService } from './config.service';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [BcryptConfigService, ConfigService],
  exports: [BcryptConfigService],
})
export class BcryptConfigModule {}
