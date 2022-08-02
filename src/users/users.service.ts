import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '@app/entities';

import { CreateUserDto } from './dto/create-user.dto';
import { GetUsersDto } from './dto/get-users.dto';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  public async create(payload: CreateUserDto) {
    const user = new User();

    this.repository.merge(user, payload);

    await this.repository.save(user);

    return user;
  }

  public async users(payload: GetUsersDto) {
    return await this.repository.find({
      take: payload.limit,
      skip: payload.skip * payload.limit,
    });
  }

  public async user(payload: GetUserDto) {
    return await this.repository
      .createQueryBuilder('user')
      .where('user.id = :id', { id: payload.id })
      .addSelect(`user.${payload.addSelect}`)
      .getOne();
  }
}
