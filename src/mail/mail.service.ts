import { Injectable } from '@nestjs/common';
import { SendgridService } from 'src/sendgrid/sendgrid.service';

@Injectable()
export class MailService {
  constructor(private readonly sendgridService: SendgridService) {}

  async send({ userEmail, userName }: { userEmail: string; userName: string }) {
    await this.sendgridService.send({
      to: userEmail,
      from: 'j.gautier180293@gmail.com',
      subject: 'Bienvenue sur notre application !',
      templateId: 'd-3e5308d60e8e4099ae0ea01eef935c6b',
      dynamicTemplateData: {
        userName,
      },
    });
  }
}
