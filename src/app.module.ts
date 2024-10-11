import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnounceModule } from './announce/announce.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { LevelModule } from './level/level.module';
import { typeOrmModuleOptions } from './ormconfig';
import { StripeModule } from './stripe/stripe.module';
import { SubjectModule } from './subject/subject.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SubjectModule,
    LevelModule,
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register(),
    AnnounceModule,
    UserModule,
    AuthModule,
    CourseModule,
    StripeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
