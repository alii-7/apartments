import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNApartment, NApartment } from './apartments.dto';

@Injectable()
export class ApartmentsService {
  constructor(private prisma: PrismaService) {}

  async get(id: number): Promise<NApartment> {
    const apartment = await this.prisma.apartment.findUnique({
      where: {
        id: id,
      },
    });

    if (!apartment) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return apartment;
  }

  async list(): Promise<NApartment[]> {
    return await this.prisma.apartment.findMany();
  }

  async create(createNApartment: CreateNApartment): Promise<NApartment> {
    return await this.prisma.apartment.create({
      data: {
        ...createNApartment,
      },
    });
  }
}
