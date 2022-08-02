import { Injectable } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { CryptoService } from '../crypto/crypto.service';

import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly crypto: CryptoService,
  ) {}

  public async login(payload: LoginDto) {
    const user = await this.usersService.user({
      username: payload.username,
      addSelect: 'password',
    });

    return await this.crypto.compare(payload.password, user.password);
  }
}
