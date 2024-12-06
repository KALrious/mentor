import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class SendgridService {
  constructor(private readonly configService: ConfigService) {
    SendGrid.setApiKey(this.configService.get<string>('SENDGRID_API_KEY'));
  }

  async send(
    mail: SendGrid.MailDataRequired,
  ): Promise<[SendGrid.ClientResponse, any]> {
    return SendGrid.send(mail);
  }
}
