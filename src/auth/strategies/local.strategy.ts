import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from '../auth.service';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const payload = new LoginDto();
    payload.username = username;
    payload.password = password;

    const user = await this.authService.validate(payload);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
