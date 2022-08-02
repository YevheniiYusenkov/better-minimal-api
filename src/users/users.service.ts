import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '@app/entities';

import { CryptoService } from '../crypto/crypto.service';

import { CreateUserDto } from './dto/create-user.dto';
import { GetUsersDto } from './dto/get-users.dto';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
    private readonly crypto: CryptoService,
  ) {}

  public async create(payload: CreateUserDto) {
    const user = new User();

    payload.password = await this.crypto.hash(payload.password);

    this.repository.merge(user, payload);

    await this.repository.save(user);

    const { password, ...withoutPassword } = user;
    return withoutPassword;
  }

  public async users(payload: GetUsersDto) {
    return await this.repository.find({
      take: payload.limit,
      skip: payload.skip * payload.limit,
    });
  }

  public async user(payload: GetUserDto) {
    const query = this.repository.createQueryBuilder('user');

    if (payload.id) {
      query.where('user.id = :id', { id: payload.id });
    }

    if (payload.username) {
      query.where('user.username = :username', { username: payload.username });
    }

    if (payload.addSelect) {
      query.addSelect(`user.${payload.addSelect}`);
    }

    return await query.getOne();
  }
}
