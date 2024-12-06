import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SendgridService } from 'src/sendgrid/sendgrid.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { TEMPLATE_IDS } from './constants/templates';
import { EmailType } from './interface/email-types';

@Injectable()
export class MailService {
  constructor(
    private readonly sendgridService: SendgridService,
    private readonly configService: ConfigService,
  ) {}

  async send({
    to,
    templateId,
    subject,
    dynamicTemplateData,
  }: {
    to: string;
    templateId: string;
    subject: string;
    dynamicTemplateData: Record<string, any>;
  }) {
    await this.sendgridService.send({
      to,
      from: this.configService.get<string>('SENDGRID_FROM_EMAIL'),
      subject,
      templateId,
      dynamicTemplateData,
    });
  }

  async welcomeEmail(user: UserEntity): Promise<void> {
    await this.send({
      to: user.email,
      templateId: TEMPLATE_IDS[EmailType.WELCOME].id,
      subject: TEMPLATE_IDS[EmailType.WELCOME].subject,
      dynamicTemplateData: {
        name: user.firstName,
        email: user.email,
      },
    });
  }

  async paymentEmail({
    price,
    user,
    subject,
    transaction_id,
  }: {
    price: number;
    user: UserEntity;
    subject: string;
    transaction_id: string;
  }): Promise<void> {
    await this.send({
      to: user.email,
      templateId: TEMPLATE_IDS[EmailType.PAYMENT].id,
      subject: TEMPLATE_IDS[EmailType.PAYMENT].subject,
      dynamicTemplateData: {
        price: price,
        date: new Date(),
        transaction_id: transaction_id,
        subject,
      },
    });
  }

  async createCourseEmail({
    teacher,
    student,
    price,
    subject,
    level,
    hours,
  }: {
    teacher: UserEntity;
    student: UserEntity;
    price: number;
    subject: string;
    level: string;
    hours: number;
  }) {
    await this.send({
      to: teacher.email,
      templateId: TEMPLATE_IDS[EmailType.COURSE].id,
      subject: TEMPLATE_IDS[EmailType.COURSE].subject,
      dynamicTemplateData: {
        courseName: `Cours de ${teacher.firstName} pour ${student.firstName}`,
        teacherName: teacher.firstName,
        hours,
        level,
        subject,
        price,
      },
    });
  }
}
