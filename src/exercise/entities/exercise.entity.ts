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
export class Exercise {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  @Length(2, 4)
  public title: string;

  @OneToMany(
    () => Workout,
    (workout) => workout.exercises, //optional
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinTable({
    name: 'exercise_workout',
    joinColumn: {
      name: 'exercise_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'workout_id',
      referencedColumnName: 'id',
    },
  })
  workouts?: Workout[];
}
