import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AppConfigModule } from '@app/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AppConfigModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
