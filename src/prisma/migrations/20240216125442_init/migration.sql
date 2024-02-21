/*
  Warnings:

  - Added the required column `location` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `services` table without a default value. This is not possible if the table is not empty.
  - Made the column `price` on table `services` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `services` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "services" ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "unit" TEXT NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
