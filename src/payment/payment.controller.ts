import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePaymentDto } from './interface/create-payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}
  @Post()
  createPayment(@Body() { paymentMethod }: CreatePaymentDto) {
    return this.paymentService.createPayment(paymentMethod);
  }

  @Get(':id')
  capturePayment(@Param('id') paymentIntentId) {
    return this.paymentService.capturePayment(paymentIntentId);
  }
}
