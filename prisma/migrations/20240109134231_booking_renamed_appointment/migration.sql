/*
  Warnings:

  - You are about to drop the `bookings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_doctorId_fkey";

-- DropTable
DROP TABLE "bookings";

-- CreateTable
CREATE TABLE "appointments" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "slot" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
