/*
  Warnings:

  - The required column `voterId` was added to the `Upvote` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Upvote" ADD COLUMN     "voterId" TEXT NOT NULL;
