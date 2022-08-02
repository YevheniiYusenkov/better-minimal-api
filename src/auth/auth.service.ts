import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from '@app/entities';

import { UsersService } from '../users/users.service';
import { CryptoService } from '../crypto/crypto.service';

import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly crypto: CryptoService,
    private readonly jwt: JwtService,
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

  public async generateToken(user: User): Promise<{ token: string }> {
    const payload = { userId: user.id };
    const token = this.jwt.sign(payload);

    return { token };
  }
}
