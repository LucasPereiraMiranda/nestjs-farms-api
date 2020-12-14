import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Horse } from './horse.entity';
import { CreateHorseDto } from './dto/create-horses.dto';
import { UpdateHorseDto } from './dto/update-horses.dto';

@Injectable()
export class HorsesService {
  constructor(
    @InjectRepository(Horse)
    private horsesRepository: Repository<Horse>,
  ) {}

  create(createHorseDto: CreateHorseDto): Promise<Horse> {
    const horse = new Horse();
    horse.name = createHorseDto.name;
    horse.birthdate = createHorseDto.birthdate;
    horse.value = createHorseDto.value;
    horse.farm = createHorseDto.farm;
    return this.horsesRepository.save(horse);
  }

  findAll(): Promise<Horse[]> {
    return this.horsesRepository.find();
  }

  findOne(id: string): Promise<Horse> {
    const horse = this.horsesRepository.findOne(id);
    if (!horse) {
      const error = { Horse: `horse with id ${id} not found` };
      throw new HttpException({ error }, HttpStatus.NOT_FOUND);
    }
    return horse;
  }

  async update(id: string, updateHorseDto: UpdateHorseDto): Promise<Horse> {
    const horse = await this.horsesRepository.findOne(id);
    if (!horse) {
      const error = { Horse: `horse with id ${id} not found` };
      throw new HttpException({ error }, HttpStatus.NOT_FOUND);
    }
    horse.name = updateHorseDto.name || horse.name;
    horse.birthdate = updateHorseDto.birthdate || horse.birthdate;
    horse.value = updateHorseDto.value || horse.value;
    horse.farm = updateHorseDto.farm || horse.farm;
    return this.horsesRepository.save(horse);
  }

  async remove(id: string): Promise<void> {
    const horse = await this.horsesRepository.findOne(id);
    if (!horse) {
      const error = { Horse: `horse with id ${id} not found` };
      throw new HttpException({ error }, HttpStatus.NOT_FOUND);
    }
    await this.horsesRepository.delete(id);
  }
}
