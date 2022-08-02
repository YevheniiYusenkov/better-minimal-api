import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '@app/guards';

import { CreateUserDto } from './dto/create-user.dto';
import { GetUsersDto } from './dto/get-users.dto';
import { UsersService } from './users.service';
import { GetUserDto } from './dto/get-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  public async create(@Body() dto: CreateUserDto) {
    return await this.service.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async users(@Query() query: GetUsersDto) {
    return await this.service.users(query);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async user(@Param() params: GetUserDto) {
    return await this.service.user(params);
  }
}
