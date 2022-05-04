-- CreateTable
CREATE TABLE "Grades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Matiere" TEXT NOT NULL,
    "Notation" TEXT NOT NULL,
    "Note" INTEGER NOT NULL,
    "Moyenne" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Grades_id_key" ON "Grades"("id");
