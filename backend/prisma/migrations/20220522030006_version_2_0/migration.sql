/*
  Warnings:

  - You are about to drop the column `ubicacion` on the `Parque` table. All the data in the column will be lost.
  - Added the required column `fechaDecreto` to the `Parque` table without a default value. This is not possible if the table is not empty.
  - Added the required column `superficieMarina` to the `Parque` table without a default value. This is not possible if the table is not empty.
  - Added the required column `superficieTerrestre` to the `Parque` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Parque" DROP COLUMN "ubicacion",
ADD COLUMN     "fechaDecreto" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "superficieMarina" INTEGER NOT NULL,
ADD COLUMN     "superficieTerrestre" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "parqueId" INTEGER NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ubicacion" (
    "id" SERIAL NOT NULL,
    "direccion" TEXT NOT NULL,
    "longitud" INTEGER NOT NULL,
    "latitud" INTEGER NOT NULL,
    "parqueId" INTEGER NOT NULL,

    CONSTRAINT "Ubicacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estado" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Estado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EstadoToUbicacion" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RegionToUbicacion" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EstadoToUbicacion_AB_unique" ON "_EstadoToUbicacion"("A", "B");

-- CreateIndex
CREATE INDEX "_EstadoToUbicacion_B_index" ON "_EstadoToUbicacion"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RegionToUbicacion_AB_unique" ON "_RegionToUbicacion"("A", "B");

-- CreateIndex
CREATE INDEX "_RegionToUbicacion_B_index" ON "_RegionToUbicacion"("B");

-- AddForeignKey
ALTER TABLE "Categoria" ADD CONSTRAINT "Categoria_parqueId_fkey" FOREIGN KEY ("parqueId") REFERENCES "Parque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ubicacion" ADD CONSTRAINT "Ubicacion_parqueId_fkey" FOREIGN KEY ("parqueId") REFERENCES "Parque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EstadoToUbicacion" ADD CONSTRAINT "_EstadoToUbicacion_A_fkey" FOREIGN KEY ("A") REFERENCES "Estado"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EstadoToUbicacion" ADD CONSTRAINT "_EstadoToUbicacion_B_fkey" FOREIGN KEY ("B") REFERENCES "Ubicacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RegionToUbicacion" ADD CONSTRAINT "_RegionToUbicacion_A_fkey" FOREIGN KEY ("A") REFERENCES "Region"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RegionToUbicacion" ADD CONSTRAINT "_RegionToUbicacion_B_fkey" FOREIGN KEY ("B") REFERENCES "Ubicacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
