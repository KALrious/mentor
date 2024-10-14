import { Body, Controller, Post } from '@nestjs/common';
import { CreatePayment } from './interface/create-payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post('/create-payment')
  createPayment(
    @Body() body: CreatePayment,
  ): Promise<{ client_secret: string }> {
    return this.paymentService.createPayment(body);
  }
}
