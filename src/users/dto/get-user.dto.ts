import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';

import { User } from '@app/entities';

type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

export class GetUserDto {
  @IsOptional()
  @Type(() => String)
  @IsUUID()
  id?: string;

  @IsOptional()
  @Type(() => String)
  addSelect?: KeysMatching<User, string>;

  @IsOptional()
  @Type(() => String)
  username?: string;
}
