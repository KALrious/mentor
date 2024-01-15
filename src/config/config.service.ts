import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private envConfig: any;
  constructor() {
    this.envConfig = {};
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
