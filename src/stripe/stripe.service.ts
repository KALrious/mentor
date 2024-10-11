import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private readonly stripe: Stripe;
  constructor(private configService: ConfigService) {
    const stripeSecretKey = this.configService.get('STRIPE_SECRET_KEY');
    this.stripe = new Stripe(stripeSecretKey);
  }

  public paymentIntentCreate(
    params: Stripe.PaymentIntentCreateParams,
    options?: Stripe.RequestOptions,
  ) {
    return this.stripe.paymentIntents.create(params, options);
  }
}
