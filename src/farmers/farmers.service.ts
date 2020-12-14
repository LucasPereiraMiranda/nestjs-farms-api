import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Farmer } from './farmer.entity';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { UpdateFarmerDto } from './dto/update-farmer-dto';

@Injectable()
export class FarmersService {
  constructor(
    @InjectRepository(Farmer)
    private farmersRepository: Repository<Farmer>,
  ) {}

  async create(createFarmerDto: CreateFarmerDto): Promise<Farmer> {
    const farmer = new Farmer();
    farmer.name = createFarmerDto.name;
    farmer.birthdate = createFarmerDto.birthdate;
    return this.farmersRepository.save(farmer);
  }

  findAll(): Promise<Farmer[]> {
    return this.farmersRepository.find();
  }

  findOne(id: string): Promise<Farmer> {
    const farmer = this.farmersRepository.findOne({ id });
    if (!farmer) {
      const error = { Farmer: `farmer with id ${id} not found` };
      throw new HttpException({ error }, HttpStatus.NOT_FOUND);
    }
    return farmer;
  }

  async update(id: string, updateFarmerDto: UpdateFarmerDto): Promise<Farmer> {
    const farmer = await this.farmersRepository.findOne(id);
    if (!farmer) {
      const error = { Farmer: `farmer with id ${id} not found` };
      throw new HttpException({ error }, HttpStatus.NOT_FOUND);
    }
    farmer.name = updateFarmerDto.name || farmer.name;
    farmer.birthdate = updateFarmerDto.birthdate || farmer.birthdate;
    await this.farmersRepository.save(farmer);
    return this.farmersRepository.findOne({ id });
  }

  async remove(id: string): Promise<void> {
    const farmer = await this.farmersRepository.findOne({ id });
    if (!farmer) {
      const message = 'farmer not found, try a valid uuid';
      const deleted = false;
      throw new HttpException({ deleted, message }, HttpStatus.NOT_FOUND);
    }
    await this.farmersRepository.delete({ id });
  }
}
