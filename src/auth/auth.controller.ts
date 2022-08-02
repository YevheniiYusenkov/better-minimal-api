import { Controller, Post, Request, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from './guards/local.quard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Request() req) {
    return await this.service.generateToken(req.user);
  }
}
