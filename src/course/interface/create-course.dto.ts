import { Transform } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateCourseDto {
  @IsNumber()
  @IsPositive()
  announceId: number;
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  date: Date;
  @IsNumber()
  @IsPositive()
  hours: number;
  @IsString()
  paymentMethod: string;
}
