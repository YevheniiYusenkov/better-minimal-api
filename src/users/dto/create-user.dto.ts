import { IsNotEmpty, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  @Type(() => String)
  username: string;

  @IsNotEmpty()
  @Type(() => String)
  password: string;

  @IsOptional()
  @Type(() => String)
  email: string;
}
