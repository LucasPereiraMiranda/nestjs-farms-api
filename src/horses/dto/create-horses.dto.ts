import {
  IsNotEmpty,
  IsDateString,
  IsNumberString,
  IsString,
} from 'class-validator';
import { Farm } from '../../farms/farm.entity';

export class CreateHorseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDateString()
  birthdate: Date;

  @IsNotEmpty()
  @IsNumberString()
  value: number;

  @IsNotEmpty()
  @IsString()
  farm: Farm;
}
