/*
  Warnings:

  - The primary key for the `services` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "services" DROP CONSTRAINT "services_pkey",
ADD COLUMN     "description" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "services_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "services_id_seq";
