import 'reflect-metadata';

import { PrismaClient } from '@prisma/client';
// import { Admin } from '@prisma/client';

const exampleId = 'f1490ca9-efeb-45b9-9332-aa8f1455624b';

const prisma = new PrismaClient();

async function main() {
  await prisma.example.upsert({
    where: { id: exampleId },
    update: {
      detail: 'detail',
    },
    create: {
      id: exampleId,
      detail: 'detail',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
