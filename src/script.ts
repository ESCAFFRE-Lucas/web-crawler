import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function main(arr: string[]) {
    await prisma.agenda.create({
        data: {
            Jour: 'vendredi',
            Matiere: arr[0],
            Nom_professeur: arr[1],
            Salle: Number(arr[2]),
        }
    })

    const agenda = await prisma.agenda.findMany();
    console.dir(agenda, { depth: null });
}


