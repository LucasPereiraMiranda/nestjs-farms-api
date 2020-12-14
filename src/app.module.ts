import { Module } from '@nestjs/common';
import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { FarmersModule } from './farmers/farmers.module';
import { FarmsModule } from './farms/farms.module';
import { HorsesModule } from './horses/horses.module';
import { CowsModule } from './cows/cows.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    DatabaseModule,
    FarmersModule,
    FarmsModule,
    HorsesModule,
    CowsModule,
  ],
})
export class AppModule {}
