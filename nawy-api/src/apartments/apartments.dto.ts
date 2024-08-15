import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export type NApartment = {
  id: number;
  address: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  squareFootage: number;
  hasBalcony: boolean;
  isAvailable: boolean;
};

// export type CreateNApartment = Omit<NApartment, 'id'>;

export class CreateNApartment {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsInt()
  @IsNotEmpty()
  numberOfBedrooms: number;

  @IsInt()
  @IsNotEmpty()
  numberOfBathrooms: number;

  @IsInt()
  @IsNotEmpty()
  squareFootage: number;

  @IsBoolean()
  @IsNotEmpty()
  hasBalcony: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isAvailable: boolean;
}
