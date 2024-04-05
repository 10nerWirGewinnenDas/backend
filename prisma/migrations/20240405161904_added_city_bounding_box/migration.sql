/*
  Warnings:

  - Added the required column `description` to the `BlackSpot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bottomRightLat` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bottomRightLng` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topLeftLat` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topLeftLng` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlackSpot" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "City" ADD COLUMN     "bottomRightLat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "bottomRightLng" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "topLeftLat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "topLeftLng" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
