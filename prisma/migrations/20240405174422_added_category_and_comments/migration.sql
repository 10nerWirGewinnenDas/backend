/*
  Warnings:

  - Added the required column `archived` to the `BlackSpot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `BlackSpot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finished` to the `BlackSpot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlackSpot" ADD COLUMN     "archived" BOOLEAN NOT NULL,
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "finished" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "authorName" TEXT,
    "spotId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BlackSpot" ADD CONSTRAINT "BlackSpot_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "BlackSpot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
