/*
  Warnings:

  - Added the required column `nombre` to the `test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "test" ADD COLUMN     "nombre" TEXT NOT NULL;
