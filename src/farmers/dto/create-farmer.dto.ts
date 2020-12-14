import { IsNotEmpty, IsDateString, IsString } from 'class-validator';

export class CreateFarmerDto {
  @IsString({
    always: true,
  })
  @IsNotEmpty()
  name: string;

  @IsDateString()
  @IsNotEmpty()
  birthdate: Date;
}
