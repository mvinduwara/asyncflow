import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StandupsModule } from './standups/standups.module';

@Module({
  imports: [PrismaModule, StandupsModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}