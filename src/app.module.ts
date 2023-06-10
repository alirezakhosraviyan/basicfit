import { Module } from '@nestjs/common';
import { WorkoutModule } from './workout/workout.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ExerciseModule } from './exercise/exercise.module';

@Module({
  imports: [
    WorkoutModule,
    UserModule,
    ExerciseModule,
    ConfigModule.forRoot({ envFilePath: ['.env'] }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5437,
      username: 'basicfit',
      password: 'basicfit',
      database: 'basicfit',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
