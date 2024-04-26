import { Injectable } from '@nestjs/common';
import { StripeService } from 'src/stripe/stripe.service';

@Injectable()
export class PaymentService {
  constructor(private readonly stripeService: StripeService) {}

  createPayment(paymentMethod: string) {
    this.stripeService.createPaymentIntent({
      amount: 1500,
      currency: 'eur',
      payment_method: paymentMethod,
      confirm: true,
      off_session: true,
      payment_method_options: {
        card: {
          capture_method: 'manual',
        },
      },
    });
  }

  capturePayment(paymentIntentId: string) {
    this.stripeService.capturePayment(paymentIntentId, {
      amount_to_capture: 1500,
    });
  }
}
