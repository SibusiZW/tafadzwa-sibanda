import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const messages = pgTable('messages', {
    id: uuid().primaryKey().defaultRandom(),
    contacts: text().notNull(),
    messageContent: text().notNull(),
    dateCreated: timestamp().defaultNow()
})