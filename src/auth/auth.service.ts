import { Injectable } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { CryptoService } from '../crypto/crypto.service';

import { LoginDto } from './dto/login.dto';
import { User } from '@app/entities';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly crypto: CryptoService,
  ) {}

  public async validate(payload: LoginDto): Promise<Partial<User>> {
    const user = await this.usersService.user({
      username: payload.username,
      addSelect: 'password',
    });

    if (!user) return null;

    if (await this.crypto.compare(payload.password, user.password)) {
      const { password, ...withoutPassword } = user;
      return withoutPassword;
    }

    return null;
  }
}
