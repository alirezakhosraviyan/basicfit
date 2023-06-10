import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercise } from './entities/exercise.entity';
import { Workout } from '../workout/entities/workout.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, Workout])],
  controllers: [ExerciseController],
  providers: [ExerciseService],
})
export class ExerciseModule {}
