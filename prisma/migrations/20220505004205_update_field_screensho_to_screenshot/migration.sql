/*
  Warnings:

  - You are about to drop the column `screensho` on the `feedbacks` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_feedbacks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "screenshot" TEXT
);
INSERT INTO "new_feedbacks" ("comment", "id", "type") SELECT "comment", "id", "type" FROM "feedbacks";
DROP TABLE "feedbacks";
ALTER TABLE "new_feedbacks" RENAME TO "feedbacks";
CREATE UNIQUE INDEX "feedbacks_id_key" ON "feedbacks"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
