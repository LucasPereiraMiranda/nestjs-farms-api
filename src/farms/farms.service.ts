import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Farm } from './farm.entity';
import { CreateFarmDto } from './dto/create-farms.dto';
import { UpdateFarmDto } from './dto/update-farms-dto';

@Injectable()
export class FarmsService {
  constructor(
    @InjectRepository(Farm)
    private farmsRepository: Repository<Farm>,
  ) {}

  create(createFarmDto: CreateFarmDto): Promise<Farm> {
    const farm = new Farm();
    farm.name = createFarmDto.name;
    farm.sizeAcres = createFarmDto.sizeAcres;
    farm.value = createFarmDto.value;
    farm.farmer = createFarmDto.farmer;
    return this.farmsRepository.save(farm);
  }

  findAll(): Promise<Farm[]> {
    return this.farmsRepository.find();
  }

  findOne(id: string): Promise<Farm> {
    const farm = this.farmsRepository.findOne(id);
    if (!farm) {
      const error = { Farm: `farm with id ${id} not found` };
      throw new HttpException({ error }, HttpStatus.NOT_FOUND);
    }
    return farm;
  }

  async update(id: string, updateFarmDto: UpdateFarmDto): Promise<Farm> {
    const farm = await this.farmsRepository.findOne(id);
    if (!farm) {
      const error = { Farm: `farm with id ${id} not found` };
      throw new HttpException({ error }, HttpStatus.NOT_FOUND);
    }
    farm.name = updateFarmDto.name || farm.name;
    farm.sizeAcres = updateFarmDto.sizeAcres || farm.sizeAcres;
    farm.value = updateFarmDto.value || farm.value;
    farm.farmer = updateFarmDto.farmer || farm.farmer;
    return this.farmsRepository.save(farm);
  }

  async remove(id: string): Promise<void> {
    const farm = await this.farmsRepository.findOne(id);
    if (!farm) {
      const error = { Farm: `farm with id ${id} not found` };
      throw new HttpException({ error }, HttpStatus.NOT_FOUND);
    }
    await this.farmsRepository.delete(id);
  }
}
