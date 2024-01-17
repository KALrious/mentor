import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { CONFIG_OPTIONS } from './constante';
import { ConfigOptions } from './interface/config-options.interface';
@Global()
@Module({})
export class ConfigModule {
  static forRoot(options: ConfigOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        ConfigService,
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
      ],
      exports: [ConfigService],
    };
  }
}
