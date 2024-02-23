import { IsString } from 'class-validator';

export class AddSubjectDto {
  @IsString()
  name: string;
}
