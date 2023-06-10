import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Workout } from './workout.entity';

@Entity('user_workout')
export class UserWorkout {
  @PrimaryColumn({ name: 'user_id' })
  userId: number;

  @PrimaryColumn({ name: 'workout_id' })
  workoutId: number;

  @ManyToOne(() => User, (user) => user.workouts, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  students: User[];

  @ManyToOne(() => Workout, (workout) => workout.users, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'workout_id', referencedColumnName: 'id' }])
  workouts: Workout[];
}
