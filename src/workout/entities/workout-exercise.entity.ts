import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Exercise } from '../../exercise/entities/exercise.entity';
import { Workout } from './workout.entity';

@Entity('exercise_workout')
export class ExerciseWorkout {
  @PrimaryColumn({ name: 'exercise_id' })
  userId: number;

  @PrimaryColumn({ name: 'workout_id' })
  workoutId: number;

  @ManyToOne(() => Exercise, (exercise) => exercise.workouts, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'exercise_id', referencedColumnName: 'id' }])
  students: Exercise[];

  @ManyToOne(() => Workout, (workout) => workout.exercises, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'workout_id', referencedColumnName: 'id' }])
  workouts: Workout[];
}
