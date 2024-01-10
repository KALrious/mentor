import { Global, Module } from '@nestjs/common';
import { LEVELS } from './bdd';
import { BddService } from './bdd.service';

@Global()
@Module({
  providers: [
    BddService,
    {
      provide: 'LEVELS',
      useValue: LEVELS,
    },
  ],
  exports: [BddService],
})
export class BddModule {}
