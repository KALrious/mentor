import { IsOptional, IsString } from 'class-validator';

export class SearchQuery {
  @IsOptional()
  @IsString()
  levelName: string;
  @IsOptional()
  @IsString()
  subjectName: string;
}
