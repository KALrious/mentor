import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}
  @Get()
  sendEmail() {
    return this.mailService.send({
      userEmail: 'jean@tech-craft.fr',
      userName: 'jean',
    });
  }
}
