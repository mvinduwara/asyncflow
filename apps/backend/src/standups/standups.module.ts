import { Module } from '@nestjs/common';
import { StandupsService } from './standups.service';
import { StandupsController } from './standups.controller';

@Module({
  controllers: [StandupsController],
  providers: [StandupsService],
})
export class StandupsModule {}