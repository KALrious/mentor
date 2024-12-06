import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreatePayment {
  @IsNumber()
  @IsPositive()
  announceId: number;
  @IsNumber()
  @IsPositive()
  hours: number;
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  date: Date;
}
