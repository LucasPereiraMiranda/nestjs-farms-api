import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateFarmDto } from './dto/create-farms.dto';
import { UpdateFarmDto } from './dto/update-farms-dto';
import { Farm } from './farm.entity';
import { FarmsService } from './farms.service';

@Controller('farms')
export class FarmsController {
  constructor(private readonly farmsService: FarmsService) {}

  @Post()
  create(@Body() createFarmDto: CreateFarmDto): Promise<Farm> {
    return this.farmsService.create(createFarmDto);
  }

  @Get()
  findAll(): Promise<Farm[]> {
    return this.farmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Farm> {
    return this.farmsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFarmDto: UpdateFarmDto,
  ): Promise<Farm> {
    return this.farmsService.update(id, updateFarmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.farmsService.remove(id);
  }
}
