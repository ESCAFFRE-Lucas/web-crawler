import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function main(arr: string[]) {
    let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    let d = new Date();
    let dayName = days[d.getDay()];

    if (!isNaN(Number(arr[arr.length-1]))) {
        await prisma.agenda.create({
            data: {
                jour : dayName,
                matiere: arr[0],
                nomProfesseur: arr[1],
                salle: Number(arr[arr.length-1]),
            }
        })
    } else {
        await prisma.agenda.create({
            data: {
                jour: dayName,
                matiere: arr[0],
                nomProfesseur: arr[1],
                salle: 1,
            }
        })
    }
    const agenda = await prisma.agenda.findMany();
    console.dir(agenda, { depth: null });
}


