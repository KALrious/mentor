import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { LevelModule } from '../level/level.module';
import { SubjectModule } from '../subject/subject.module';
import { AnnounceController } from './announce.controller';
import { AnnounceService } from './announce.service';
import { AnnounceEntity } from './entities/announce.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnnounceEntity]),
    LevelModule,
    SubjectModule,
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
  providers: [AnnounceService],
  controllers: [AnnounceController],
  exports: [AnnounceService],
})
export class AnnounceModule {}
