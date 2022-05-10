-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "test" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parque" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ubicacion" JSONB NOT NULL,
    "descripcion" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,

    CONSTRAINT "Parque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anuncio" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "parqueId" INTEGER NOT NULL,

    CONSTRAINT "Anuncio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flora" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Flora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fauna" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Fauna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actividad" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Actividad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Horario" (
    "id" SERIAL NOT NULL,
    "dias" TEXT NOT NULL,
    "horaAbrir" TEXT NOT NULL,
    "horaCerrar" TEXT NOT NULL,
    "parqueId" INTEGER NOT NULL,

    CONSTRAINT "Horario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'USER',

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FloraToParque" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FaunaToParque" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ActividadToParque" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Horario_parqueId_key" ON "Horario"("parqueId");

-- CreateIndex
CREATE UNIQUE INDEX "_FloraToParque_AB_unique" ON "_FloraToParque"("A", "B");

-- CreateIndex
CREATE INDEX "_FloraToParque_B_index" ON "_FloraToParque"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FaunaToParque_AB_unique" ON "_FaunaToParque"("A", "B");

-- CreateIndex
CREATE INDEX "_FaunaToParque_B_index" ON "_FaunaToParque"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ActividadToParque_AB_unique" ON "_ActividadToParque"("A", "B");

-- CreateIndex
CREATE INDEX "_ActividadToParque_B_index" ON "_ActividadToParque"("B");

-- AddForeignKey
ALTER TABLE "Anuncio" ADD CONSTRAINT "Anuncio_parqueId_fkey" FOREIGN KEY ("parqueId") REFERENCES "Parque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horario" ADD CONSTRAINT "Horario_parqueId_fkey" FOREIGN KEY ("parqueId") REFERENCES "Parque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FloraToParque" ADD CONSTRAINT "_FloraToParque_A_fkey" FOREIGN KEY ("A") REFERENCES "Flora"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FloraToParque" ADD CONSTRAINT "_FloraToParque_B_fkey" FOREIGN KEY ("B") REFERENCES "Parque"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FaunaToParque" ADD CONSTRAINT "_FaunaToParque_A_fkey" FOREIGN KEY ("A") REFERENCES "Fauna"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FaunaToParque" ADD CONSTRAINT "_FaunaToParque_B_fkey" FOREIGN KEY ("B") REFERENCES "Parque"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActividadToParque" ADD CONSTRAINT "_ActividadToParque_A_fkey" FOREIGN KEY ("A") REFERENCES "Actividad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActividadToParque" ADD CONSTRAINT "_ActividadToParque_B_fkey" FOREIGN KEY ("B") REFERENCES "Parque"("id") ON DELETE CASCADE ON UPDATE CASCADE;
