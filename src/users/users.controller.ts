import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { GetUsersDto } from './dto/get-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  public async create(@Body() dto: CreateUserDto) {
    return await this.service.create(dto);
  }

  @Get()
  public async users(@Query() params: GetUsersDto) {
    return await this.service.users(params);
  }

  @Get(':id')
  public async user(@Param('id') id: string) {
    return await this.service.user(id);
  }
}
