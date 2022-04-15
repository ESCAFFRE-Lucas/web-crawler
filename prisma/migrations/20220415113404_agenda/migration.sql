-- CreateTable
CREATE TABLE "Agenda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Jour" TEXT NOT NULL,
    "Matiere" TEXT NOT NULL,
    "Nom_professeur" TEXT NOT NULL,
    "Salle" INTEGER NOT NULL
);
