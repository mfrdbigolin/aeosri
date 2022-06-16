-- CreateTable
CREATE TABLE "Article" (
    "slug" VARCHAR(48) NOT NULL,
    "id" INTEGER NOT NULL,
    "publDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updtDate" TIMESTAMP(3),
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(320),
    "content" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("slug")
);

-- CreateIndex
CREATE UNIQUE INDEX "Article_id_key" ON "Article"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Article_title_key" ON "Article"("title");
