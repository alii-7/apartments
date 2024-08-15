-- CreateTable
CREATE TABLE "Apartment" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "numberOfBedrooms" INTEGER NOT NULL,
    "numberOfBathrooms" INTEGER NOT NULL,
    "squareFootage" INTEGER NOT NULL,
    "hasBalcony" BOOLEAN NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,

    CONSTRAINT "Apartment_pkey" PRIMARY KEY ("id")
);
