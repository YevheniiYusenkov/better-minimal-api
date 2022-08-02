import { Module } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { BcryptConfigModule } from '@app/config';

@Module({
  imports: [BcryptConfigModule],
  providers: [CryptoService],
  exports: [CryptoService],
})
export class CryptoModule {}
