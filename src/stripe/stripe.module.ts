import { Module } from '@nestjs/common';
import { CourseModule } from 'src/course/course.module';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';

@Module({
  controllers: [StripeController],
  providers: [StripeService],
  exports: [StripeService],
  imports: [CourseModule],
})
export class StripeModule {}
