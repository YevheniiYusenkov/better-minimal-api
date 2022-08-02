import { Controller, Post, Request, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from './guards/local.quard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Request() req) {
    return req.user;
  }
}
