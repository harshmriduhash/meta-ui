-- AlterTable
ALTER TABLE "mock_ups" ADD COLUMN     "is_enabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "mock_ups_slug_key" ON "mock_ups"("slug");
