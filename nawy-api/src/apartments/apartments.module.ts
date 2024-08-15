import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApartmentsController } from './apartments.controller';
import { ApartmentsService } from './apartments.service';

@Module({
  providers: [ApartmentsService, PrismaService],
  controllers: [ApartmentsController],
})
export class ApartmentsModule {}
