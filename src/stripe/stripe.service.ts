import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private readonly stripe: Stripe;
  private readonly webhookKey: string;
  constructor(private configService: ConfigService) {
    const stripeApiKey = this.configService.get('STRIPE_SECRET_KEY');
    const stripeWebhookKey = this.configService.get(
      'STRIPE_WEBHOOK_SECRET_KEY',
    );
    this.stripe = new Stripe(stripeApiKey);
    this.webhookKey = stripeWebhookKey;
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

  //#region webhook
  public async handleIncomingEvents(signature: string, rawBody: Buffer) {
    const event = await this.stripe.webhooks.constructEvent(
      rawBody,
      signature,
      this.webhookKey,
    );
    switch (event.type) {
      case 'payment_intent.created':
        console.log('payment intent created');
        break;
      case 'payment_intent.succeeded':
        console.log('payment intent succeeded');
        break;
      case 'payment_intent.payment_failed':
        console.log('payment intent failed');
        break;
    }
    return true;
  }
  //#endregion
}
