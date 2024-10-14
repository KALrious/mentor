import { IsNumber, IsPositive } from 'class-validator';

export class CreatePayment {
  @IsNumber()
  @IsPositive()
  announceId: number;
  @IsNumber()
  @IsPositive()
  hours: number;
}
