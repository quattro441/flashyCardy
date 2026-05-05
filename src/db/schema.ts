import {
  index,
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const decksTable = pgTable(
  "decks",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    clerkUserId: varchar("clerk_user_id", { length: 255 }).notNull(),
    title: varchar({ length: 255 }).notNull(),
    description: text(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [index("decks_clerk_user_id_idx").on(table.clerkUserId)],
);

export const cardsTable = pgTable(
  "cards",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    deckId: integer("deck_id")
      .notNull()
      .references(() => decksTable.id, { onDelete: "cascade" }),
    front: text().notNull(),
    back: text().notNull(),
    position: integer().default(0).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("cards_deck_id_idx").on(table.deckId),
    index("cards_deck_id_position_idx").on(table.deckId, table.position),
  ],
);
