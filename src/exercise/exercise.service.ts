import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from './entities/exercise.entity';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}
  create(createExerciseDto: CreateExerciseDto) {
    console.log(createExerciseDto, this.exerciseRepository);
    return 'This action adds a new exercise';
  }

  findAll() {
    return `This action returns all exercise`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exercise`;
  }
}
