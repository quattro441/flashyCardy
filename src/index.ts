import "dotenv/config";

import { eq } from "drizzle-orm";

import { db } from "./db";
import { cardsTable, decksTable } from "./db/schema";

async function main() {
  const deck: typeof decksTable.$inferInsert = {
    clerkUserId: "user_seed_example",
    title: "Indonesian from English",
    description: "Starter vocabulary for English speakers learning Indonesian.",
  };

  const [createdDeck] = await db.insert(decksTable).values(deck).returning();
  console.log("New deck created!", createdDeck);

  await db.insert(cardsTable).values([
    {
      deckId: createdDeck.id,
      front: "Dog",
      back: "Anjing",
      position: 1,
    },
    {
      deckId: createdDeck.id,
      front: "Cat",
      back: "Kucing",
      position: 2,
    },
  ]);
  console.log("Cards created!");

  const decks = await db.select().from(decksTable);
  console.log("Getting all decks from the database: ", decks);

  const cards = await db
    .select()
    .from(cardsTable)
    .where(eq(cardsTable.deckId, createdDeck.id));
  console.log("Getting cards for the new deck: ", cards);

  await db.delete(decksTable).where(eq(decksTable.id, createdDeck.id));
  console.log("Deck and associated cards deleted!");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
