import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/guards/role.decorator';
import { Role } from 'src/user/interface/role';
import { CreatePayment } from './interface/create-payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post('/create-payment')
  @UseGuards(AuthGuard)
  @Roles(Role.Student)
  createPayment(
    @Body() body: CreatePayment,
    @Req() { user },
  ): Promise<{ client_secret: string }> {
    return this.paymentService.createPayment(body, user.sub);
  }
}
