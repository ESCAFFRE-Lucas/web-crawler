import { PrismaClient } from '@prisma/client';
import {getDays} from "./start";

const prisma = new PrismaClient();

export async function main(arr: string[]) {

    console.log(typeof arr[2]);

    if (!isNaN(Number(arr[arr.length-1]))) {
        await prisma.agenda.create({
            data: {
                Jour: getDays(),
                Matiere: arr[0],
                Nom_professeur: arr[1],
                Salle: 301,
            }
        })
    } else {
        await prisma.agenda.create({
            data: {
                Jour: getDays(),
                Matiere: arr[0],
                Nom_professeur: arr[1],
                Salle: 1,
            }
        })
    }
    const agenda = await prisma.agenda.findMany();
    console.dir(agenda, { depth: null });
}



