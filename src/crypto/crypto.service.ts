import * as bcrypt from 'bcrypt';

import { Injectable } from '@nestjs/common';

import { BcryptConfigService } from '@app/config';

@Injectable()
export class CryptoService {
  constructor(private readonly config: BcryptConfigService) {}

  public async hash(value: string): Promise<string> {
    return await bcrypt.hash(value, this.config.salt);
  }

  public async compare(value: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(value, hash);
  }
}
