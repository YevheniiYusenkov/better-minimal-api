import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { GetUsersDto } from './dto/get-users.dto';

@Injectable()
export class UsersService {
  public async create(payload: CreateUserDto) {
    return payload;
  }

  public async users(payload: GetUsersDto) {
    return [{ id: 1, username: 'placeholder' }];
  }

  public async user(id: string) {
    return { id, username: 'placeholder' };
  }
}
