import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';

@Injectable()
export class WorkoutService {
  create(createWorkoutDto: CreateWorkoutDto) {
    console.log(createWorkoutDto);
    return 'This action adds a new workout';
  }

  async findAll(): Promise<[]> {
    return [];
  }

  findOne(id: number) {
    return `This action returns a #${id} workout`;
  }
}
