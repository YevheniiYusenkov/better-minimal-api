import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BcryptConfigService {
  constructor(private readonly configService: ConfigService) {}

  get salt(): number {
    return parseInt(this.configService.get<string>('bcrypt.salt'));
  }
}
