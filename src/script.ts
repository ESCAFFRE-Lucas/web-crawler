import { PrismaClient } from '@prisma/client';
import {getDays} from './start';

export const prisma = new PrismaClient();

export async function main(arr: string[]) {

    if (!isNaN(Number(arr[arr.length-1]))) {
        await prisma.agenda.create({
            data: {
                jour : getDays(),
                matiere: arr[0],
                nomProfesseur: arr[1],
                salle: Number(arr[arr.length-1]),
            }
        })
    } else {
        await prisma.agenda.create({
            data: {
                jour: getDays(),
                matiere: arr[0],
                nomProfesseur: arr[1],
                salle: 1,
            }
        })
    }
    const agenda = await prisma.agenda.findMany();
    console.dir(agenda, { depth: null });
}


