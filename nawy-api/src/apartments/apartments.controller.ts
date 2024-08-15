import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateNApartment } from './apartments.dto';
import { ApartmentsService } from './apartments.service';

@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Get(':id')
  getApartment(@Param('id') id: string) {
    return this.apartmentsService.get(+id);
  }

  @Get()
  listApartments() {
    return this.apartmentsService.list();
  }

  @Post()
  createApartment(@Body() createNApartment: CreateNApartment) {
    return this.apartmentsService.create(createNApartment);
  }
}
