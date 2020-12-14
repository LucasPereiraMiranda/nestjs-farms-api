import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cow } from './cow.entity';
import { CreateCowDto } from './dto/create-cows.dto';
import { UpdateCowDto } from './dto/update-cows.dto';

@Injectable()
export class CowsService {
  constructor(
    @InjectRepository(Cow)
    private cowsRepository: Repository<Cow>,
  ) {}

  create(createCowDto: CreateCowDto): Promise<Cow> {
    const cow = new Cow();
    cow.name = createCowDto.name;
    cow.birthdate = createCowDto.birthdate;
    cow.value = createCowDto.value;
    cow.farm = createCowDto.farm;
    return this.cowsRepository.save(cow);
  }

  findAll(): Promise<Cow[]> {
    return this.cowsRepository.find();
  }

  findOne(id: string): Promise<Cow> {
    const cow = this.cowsRepository.findOne(id);
    if (!cow) {
      const error = { Cow: `cow with id ${id} not found` };
      throw new HttpException({ error }, HttpStatus.NOT_FOUND);
    }
    return cow;
  }

  async update(id: string, updateCowDto: UpdateCowDto): Promise<Cow> {
    const cow = await this.cowsRepository.findOne(id);
    if (!cow) {
      const error = { Cow: `cow with id ${id} not found` };
      throw new HttpException({ error }, HttpStatus.NOT_FOUND);
    }
    cow.name = updateCowDto.name || cow.name;
    cow.birthdate = updateCowDto.birthdate || cow.birthdate;
    cow.value = updateCowDto.value || cow.value;
    cow.farm = updateCowDto.farm || cow.farm;
    return this.cowsRepository.save(cow);
  }

  async remove(id: string): Promise<void> {
    const cow = await this.cowsRepository.findOne(id);
    if (!cow) {
      const error = { Cow: `cow with id ${id} not found` };
      throw new HttpException({ error }, HttpStatus.NOT_FOUND);
    }
    await this.cowsRepository.delete(id);
  }
}
