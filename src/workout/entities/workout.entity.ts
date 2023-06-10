import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Length } from 'class-validator';
import { User } from '../../user/entities/user.entity';
import { Exercise } from '../../exercise/entities/exercise.entity';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @Length(2, 4)
  public title: string;

  @ManyToMany(
    () => User,
    (user) => user.workouts, //optional
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
  users?: User[];

  @ManyToMany(
    () => Exercise,
    (exercise) => exercise.workouts, //optional
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
  exercises?: Exercise[];
}
