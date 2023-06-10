import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Length } from 'class-validator';
import { Workout } from '../../workout/entities/workout.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  @Length(2, 4)
  public username: string;

  @Column({ default: true })
  public isActive: boolean;

  @OneToMany(
    () => Workout,
    (workout) => workout.users, //optional
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinTable({
    name: 'user_workout',
    joinColumn: {
      name: 'workout_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
  })
  workouts?: Workout[];
}
