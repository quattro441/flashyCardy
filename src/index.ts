import "dotenv/config";

import { db } from "./db";
import { cardsTable, decksTable } from "./db/schema";

const clerkUserId = "user_3DJMVtlhTokASHavK3mv8AawPea";

const decks: Array<{
  deck: typeof decksTable.$inferInsert;
  cards: Array<Omit<typeof cardsTable.$inferInsert, "deckId">>;
}> = [
  {
    deck: {
      clerkUserId,
      title: "Spanish Vocabulary From English",
      description:
        "Common English words with Spanish translations for beginner practice.",
    },
    cards: [
      { front: "Hello", back: "Hola", position: 1 },
      { front: "Goodbye", back: "Adiós", position: 2 },
      { front: "Please", back: "Por favor", position: 3 },
      { front: "Thank you", back: "Gracias", position: 4 },
      { front: "Yes", back: "Sí", position: 5 },
      { front: "No", back: "No", position: 6 },
      { front: "Water", back: "Agua", position: 7 },
      { front: "Food", back: "Comida", position: 8 },
      { front: "House", back: "Casa", position: 9 },
      { front: "School", back: "Escuela", position: 10 },
      { front: "Book", back: "Libro", position: 11 },
      { front: "Friend", back: "Amigo / amiga", position: 12 },
      { front: "Family", back: "Familia", position: 13 },
      { front: "Today", back: "Hoy", position: 14 },
      { front: "Tomorrow", back: "Mañana", position: 15 },
    ],
  },
  {
    deck: {
      clerkUserId,
      title: "British History Questions",
      description:
        "Key questions and answers about major events in British history.",
    },
    cards: [
      {
        front: "Who was the first Norman king of England?",
        back: "William the Conqueror.",
        position: 1,
      },
      {
        front: "In what year was the Battle of Hastings?",
        back: "1066.",
        position: 2,
      },
      {
        front: "What document did King John seal in 1215?",
        back: "Magna Carta.",
        position: 3,
      },
      {
        front: "What was the conflict between the Houses of Lancaster and York called?",
        back: "The Wars of the Roses.",
        position: 4,
      },
      {
        front: "Which Tudor monarch broke with the Roman Catholic Church?",
        back: "Henry VIII.",
        position: 5,
      },
      {
        front: "Who was queen during the defeat of the Spanish Armada?",
        back: "Elizabeth I.",
        position: 6,
      },
      {
        front: "In what year did the English Civil War begin?",
        back: "1642.",
        position: 7,
      },
      {
        front: "Who led the Parliamentarian forces and later became Lord Protector?",
        back: "Oliver Cromwell.",
        position: 8,
      },
      {
        front: "What event restored the monarchy in 1660?",
        back: "The Restoration.",
        position: 9,
      },
      {
        front: "What 1688 event replaced James II with William and Mary?",
        back: "The Glorious Revolution.",
        position: 10,
      },
      {
        front: "What acts united England and Scotland into Great Britain in 1707?",
        back: "The Acts of Union.",
        position: 11,
      },
      {
        front: "Which monarch's reign is associated with Britain's Industrial Revolution expansion?",
        back: "Queen Victoria.",
        position: 12,
      },
      {
        front: "What was the name of the movement for women's voting rights in Britain?",
        back: "The suffrage movement.",
        position: 13,
      },
      {
        front: "Who was Britain's prime minister during most of World War II?",
        back: "Winston Churchill.",
        position: 14,
      },
      {
        front: "In what year did the United Kingdom join the European Economic Community?",
        back: "1973.",
        position: 15,
      },
    ],
  },
];

async function main() {
  for (const { deck, cards } of decks) {
    const [createdDeck] = await db.insert(decksTable).values(deck).returning();

    await db.insert(cardsTable).values(
      cards.map((card) => ({
        ...card,
        deckId: createdDeck.id,
      })),
    );

    console.log(
      `Created "${createdDeck.title}" with ${cards.length} cards for ${createdDeck.clerkUserId}.`,
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
