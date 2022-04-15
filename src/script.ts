import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.agenda.create({
        data: {
            id: 3,
            Jour: 'mardi',
            Matiere: 'piscine-js',
            Nom_professeur: 'roques',
            Salle: 301,
        }
    })

    const agenda = await prisma.agenda.findMany();
    console.dir(agenda, { depth: null });
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
