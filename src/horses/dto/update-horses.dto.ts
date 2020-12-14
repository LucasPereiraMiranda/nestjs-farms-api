import { IsDateString, IsNumberString, IsString } from 'class-validator';
import { Farm } from '../../farms/farm.entity';

export class UpdateHorseDto {
  @IsString()
  name?: string;

  @IsDateString()
  birthdate?: Date;

  @IsNumberString()
  value?: number;

  @IsString()
  farm?: Farm;
}
