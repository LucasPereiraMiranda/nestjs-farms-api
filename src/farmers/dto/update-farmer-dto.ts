import { IsDateString, IsString } from 'class-validator';

export class UpdateFarmerDto {
  @IsString()
  name?: string;

  @IsDateString()
  birthdate?: Date;
}
