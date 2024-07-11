import { Embed, TextChannel } from "discord.js";
import CustomClient from "./classes/client";

export async function sendUpdateMessages(client: CustomClient, channel: TextChannel, message: string, embeds?: Embed[]) {
    try {
        if (embeds) {
            await channel.send({ content: message, embeds });
        } else {
            await channel.send(message);
        }
    } catch {
        throw new Error("Failed to send update messages.");
    }
}