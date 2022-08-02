import { IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUsersDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  limit: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  skip: number;
}
