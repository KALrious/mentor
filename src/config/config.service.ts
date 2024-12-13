import { Inject, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { CONFIG_OPTIONS } from './constante';
import { ConfigOptions } from './interface/config-options.interface';
import { EnvConfig } from './interface/envconfig.interface';

@Injectable()
export class ConfigService {
  private envConfig: EnvConfig;
  constructor(@Inject(CONFIG_OPTIONS) options: ConfigOptions) {
    const fileName = `${process.env.NODE_ENV || ''}.env`;
    const filePath = path.resolve(
      __dirname,
      '../../..',
      options.folder,
      fileName,
    );
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
