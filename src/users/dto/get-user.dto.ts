import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

import { User } from '@app/entities';

type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

export class GetUserDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsOptional()
  addSelect: KeysMatching<User, string>;
}
