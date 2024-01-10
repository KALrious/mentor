import { Global, Module } from '@nestjs/common';
import { BddService } from './bdd.service';

@Global()
@Module({
  providers: [BddService],
  exports: [BddService],
})
export class BddModule {}
