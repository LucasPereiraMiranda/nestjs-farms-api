import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCowDto } from './dto/create-cows.dto';
import { UpdateCowDto } from './dto/update-cows.dto';
import { Cow } from './cow.entity';
import { CowsService } from './cows.service';

@Controller('cows')
export class CowsController {
  constructor(private readonly cowsService: CowsService) {}

  @Post()
  create(@Body() createCowDto: CreateCowDto): Promise<Cow> {
    return this.cowsService.create(createCowDto);
  }

  @Get()
  findAll(): Promise<Cow[]> {
    return this.cowsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cow> {
    return this.cowsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCowDto: UpdateCowDto,
  ): Promise<Cow> {
    return this.cowsService.update(id, updateCowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.cowsService.remove(id);
  }
}
