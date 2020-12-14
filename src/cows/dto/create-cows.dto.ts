import {
  IsNotEmpty,
  IsNumberString,
  IsString,
  IsDateString,
} from 'class-validator';
import { Farm } from '../../farms/farm.entity';

export class CreateCowDto {
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
