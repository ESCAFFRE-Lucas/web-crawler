import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function main(arr: string[]) {
    let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    let d = new Date();
    let dayName = days[d.getDay()];

    if (!isNaN(Number(arr[arr.length-1]))) {
        await prisma.agenda.create({
            data: {
                Jour: dayName,
                Matiere: arr[0],
                Nom_professeur: arr[1],
                Salle: Number(arr[arr.length-1]),
            }
        })
    } else {
        await prisma.agenda.create({
            data: {
                Jour: dayName,
                Matiere: arr[0],
                Nom_professeur: arr[1],
                Salle: 1,
            }
        })
    }
    const agenda = await prisma.agenda.findMany();
    console.dir(agenda, { depth: null });
}


