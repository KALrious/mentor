import { Module } from '@nestjs/common';
import { SendgridModule } from 'src/sendgrid/sendgrid.module';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  controllers: [MailController],
  providers: [MailService],
  imports: [SendgridModule],
  exports: [MailService],
})
export class MailModule {}
