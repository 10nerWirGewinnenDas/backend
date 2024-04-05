/*
  Warnings:

  - A unique constraint covering the columns `[spotId,voterId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Vote_spotId_voterId_key" ON "Vote"("spotId", "voterId");
