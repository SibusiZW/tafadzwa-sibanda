import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const messages = pgTable('messages', {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
    contacts: text().notNull(),
    messageContent: text().notNull(),
    dateCreated: timestamp().defaultNow()
})