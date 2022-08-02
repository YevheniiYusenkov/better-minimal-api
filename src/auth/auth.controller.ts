import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  public async login(@Body() dto: { id: string }) {
    return await this.service.login(dto.id);
  }
}
