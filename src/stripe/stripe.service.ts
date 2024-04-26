import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private readonly stripe: Stripe;
  constructor(private configService: ConfigService) {
    const stripeApiKey = this.configService.get('STRIPE_SECRET_KEY');
    this.stripe = new Stripe(stripeApiKey);
  }

  //#region PaymentIntent
  public async createPaymentIntent(params: Stripe.PaymentIntentCreateParams) {
    return this.stripe.paymentIntents.create(params);
  }

  public async capturePayment(
    id: string,
    params?: Stripe.PaymentIntentCaptureParams,
  ) {
    return this.stripe.paymentIntents.capture(id, params);
  }
  //#endregion
}
