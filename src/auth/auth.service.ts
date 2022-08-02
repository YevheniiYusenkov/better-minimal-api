import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  public async login(id: string) {
    return await this.usersService.user({
      id: id,
      addSelect: 'password',
    });
  }
}
