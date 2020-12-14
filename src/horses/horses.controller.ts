import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateHorseDto } from './dto/create-horses.dto';
import { UpdateHorseDto } from './dto/update-horses.dto';
import { Horse } from './horse.entity';
import { HorsesService } from './horses.service';

@Controller('horses')
export class HorsesController {
  constructor(private readonly horsesService: HorsesService) {}

  @Post()
  create(@Body() createHorseDto: CreateHorseDto): Promise<Horse> {
    return this.horsesService.create(createHorseDto);
  }

  @Get()
  findAll(): Promise<Horse[]> {
    return this.horsesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Horse> {
    return this.horsesService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateHorseDto: UpdateHorseDto,
  ): Promise<Horse> {
    return this.horsesService.update(id, updateHorseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.horsesService.remove(id);
  }
}
