import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { UpdateFarmerDto } from './dto/update-farmer-dto';
import { Farmer } from './farmer.entity';
import { FarmersService } from './farmers.service';

@Controller('farmers')
export class FarmersController {
  constructor(private readonly farmersService: FarmersService) {}

  @Post()
  create(@Body() createFarmerDto: CreateFarmerDto): Promise<Farmer> {
    return this.farmersService.create(createFarmerDto);
  }

  @Get()
  findAll(): Promise<Farmer[]> {
    return this.farmersService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFarmerDto: UpdateFarmerDto,
  ): Promise<Farmer> {
    return this.farmersService.update(id, updateFarmerDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Farmer> {
    return this.farmersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.farmersService.remove(id);
  }
}
