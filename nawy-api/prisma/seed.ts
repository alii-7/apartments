import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.apartment.createMany({
    data: [
      {
        address: '123 Main St, Apt 4B, Anytown, USA',
        numberOfBedrooms: 2,
        numberOfBathrooms: 2,
        squareFootage: 900,
        hasBalcony: true,
        isAvailable: false,
      },
      {
        address: '456 Elm St, Apt 2A, Anytown, USA',
        numberOfBedrooms: 1,
        numberOfBathrooms: 1,
        squareFootage: 600,
        hasBalcony: false,
        isAvailable: true,
      },
    ],
  });

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
