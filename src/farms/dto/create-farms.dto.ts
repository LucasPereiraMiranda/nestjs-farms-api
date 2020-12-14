import { IsNotEmpty, IsString, IsNumberString } from 'class-validator';
import { Farmer } from '../../farmers/farmer.entity';

export class CreateFarmDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumberString()
  sizeAcres: number;

  @IsNotEmpty()
  @IsNumberString()
  value: number;

  @IsNotEmpty()
  @IsString()
  farmer: Farmer;
}
