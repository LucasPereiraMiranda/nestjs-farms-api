import { IsNumberString, IsString } from 'class-validator';
import { Farmer } from '../../farmers/farmer.entity';

export class UpdateFarmDto {
  @IsString()
  name?: string;

  @IsNumberString()
  sizeAcres?: number;

  @IsNumberString()
  value?: number;

  @IsString()
  farmer?: Farmer;
}
