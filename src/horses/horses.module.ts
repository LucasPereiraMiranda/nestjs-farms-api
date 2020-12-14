import { Module } from '@nestjs/common';
import { HorsesController } from './horses.controller';
import { HorsesService } from './horses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Horse } from './horse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Horse])],
  controllers: [HorsesController],
  providers: [HorsesService],
})
export class HorsesModule {}
