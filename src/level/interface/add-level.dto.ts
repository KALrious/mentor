import { IsString } from 'class-validator';

export class AddLevelDto {
  @IsString()
  name: string;
}
