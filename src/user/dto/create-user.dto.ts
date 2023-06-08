import { Length } from 'class-validator';

export class CreateUserDto {
  @Length(2, 255)
  username: string;
}
