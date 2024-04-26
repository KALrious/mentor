import { Module } from '@nestjs/common';
import { StripeModule } from 'src/stripe/stripe.module';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService],
  imports: [StripeModule],
  exports: [PaymentService],
})
export class PaymentModule {}
