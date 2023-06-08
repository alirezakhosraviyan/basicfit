import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Length } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  @Length(2, 4)
  public username: string;

  @Column({ default: true })
  public isActive: boolean;
}
