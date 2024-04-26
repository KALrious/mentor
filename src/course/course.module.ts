import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnounceModule } from 'src/announce/announce.module';
import { PaymentModule } from 'src/payment/payment.module';
import { UserModule } from 'src/user/user.module';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { CourseEntity } from './entities/course.entity';

@Module({
  imports: [
    PaymentModule,
    AnnounceModule,
    TypeOrmModule.forFeature([CourseEntity]),
    UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        global: true,
        secret: configService.get('SECRET_TOKEN'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
