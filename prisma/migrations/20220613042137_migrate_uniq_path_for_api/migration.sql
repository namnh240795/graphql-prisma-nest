/*
  Warnings:

  - A unique constraint covering the columns `[path]` on the table `Api` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Api_path_key" ON "Api"("path");
