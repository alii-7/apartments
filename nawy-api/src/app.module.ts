import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApartmentsModule } from './apartments/apartments.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ApartmentsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
