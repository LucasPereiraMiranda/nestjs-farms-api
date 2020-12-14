import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmersService } from './farmers.service';
import { FarmersController } from './farmers.controller';
import { Farmer } from './farmer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Farmer])],
  providers: [FarmersService],
  controllers: [FarmersController],
  exports: [TypeOrmModule],
})
export class FarmersModule {}
