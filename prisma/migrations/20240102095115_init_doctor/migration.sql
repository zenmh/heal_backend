-- CreateEnum
CREATE TYPE "Speciality" AS ENUM ('THYROID', 'EYE', 'NEUROLOGY', 'CARDIOLOGY', 'MEDICINE', 'PSYCHIATRY', 'DENTIST', 'ORTHOPEDICS', 'HAEMATOLOGY', 'GYNAECOLOGY');

-- CreateEnum
CREATE TYPE "Branch" AS ENUM ('BARISHAL', 'CHATTOGRAM', 'DHAKA', 'KHULNA', 'RAJSHAHI', 'RANGPUR', 'MYMENSINGH', 'SYLHET');

-- CreateTable
CREATE TABLE "doctorReviews" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "feedback" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "doctorReviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "image" TEXT,
    "experiences" TEXT NOT NULL,
    "speciality" "Speciality" NOT NULL,
    "branch" "Branch" NOT NULL DEFAULT 'DHAKA',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "doctors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "doctors_email_key" ON "doctors"("email");

-- AddForeignKey
ALTER TABLE "doctorReviews" ADD CONSTRAINT "doctorReviews_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
