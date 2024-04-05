-- CreateEnum
CREATE TYPE "SpotActionType" AS ENUM ('CREATED', 'TRANSFERRED', 'FINNISHED');

-- CreateTable
CREATE TABLE "BlackSpot" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,

    CONSTRAINT "BlackSpot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CityDistrict" (
    "id" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,
    "plzCodes" TEXT[],

    CONSTRAINT "CityDistrict_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubjectOffice" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "districtId" TEXT NOT NULL,

    CONSTRAINT "SubjectOffice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Upvote" (
    "id" TEXT NOT NULL,
    "spotId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Upvote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CityDistrict" ADD CONSTRAINT "CityDistrict_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectOffice" ADD CONSTRAINT "SubjectOffice_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "CityDistrict"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upvote" ADD CONSTRAINT "Upvote_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "BlackSpot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
