'use server'

import { db } from "@/db"
import { messages } from "@/db/schema"

export async function createMessage(contacts: string, messageContent: string) {
    await db.insert(messages).values({ contacts: contacts, messageContent: messageContent })
}