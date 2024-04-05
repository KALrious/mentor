import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { AuthSignInDto } from './interface/auth-signin.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async singIn({ email, password }: AuthSignInDto) {
    const user = await this.userService.findOne(email);
    const isAuthorized = await compare(password, user.passwordHash);
    if (!isAuthorized) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.email };
    return {
      acces_token: await this.jwtService.signAsync(payload),
    };
  }
}
