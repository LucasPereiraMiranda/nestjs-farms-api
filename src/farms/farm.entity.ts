import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Farmer } from '../farmers/farmer.entity';
import { Horse } from '../horses/horse.entity';
import { Cow } from '../cows/cow.entity';
@Entity()
export class Farm {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  sizeAcres: number;

  @Column('decimal')
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Horse, (horses: Horse) => horses)
  public horses: Horse[];

  @OneToMany(() => Cow, (cows: Cow) => cows)
  public cows: Cow[];

  @ManyToOne(() => Farmer, (farmer: Farmer) => farmer)
  public farmer: Farmer;
}
