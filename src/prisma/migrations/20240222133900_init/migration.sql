/*
  Warnings:

  - Made the column `price` on table `services` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `services` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `services` required. This step will fail if there are existing NULL values in that column.
  - Made the column `unit` on table `services` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category` on table `services` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "services" ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "unit" SET NOT NULL,
ALTER COLUMN "category" SET NOT NULL;
