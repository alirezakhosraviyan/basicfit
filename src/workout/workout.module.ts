import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Exercise } from '../exercise/entities/exercise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Exercise])],
  controllers: [WorkoutController],
  providers: [WorkoutService],
})
export class WorkoutModule {}
