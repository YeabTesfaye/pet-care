import { PrismaClient } from '@prisma/client';
import { sampleData } from './sample-data'; // adjust path as needed

const prisma = new PrismaClient();

async function main() {
  // Manually delete documents with raw MongoDB command
  // await prisma.$runCommandRaw({
  //   delete: 'User',
  //   deletes: [{ q: {}, limit: 0 }],
  // });

  // // Insert users with raw command
  // await prisma.$runCommandRaw({
  //   insert: 'User',
  //   documents: sampleData.users,
  // });

  // console.log('Seeded without using transactions.');

  const allUsers = await prisma.user.findMany()
  console.log(allUsers, "Allusers ")
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
