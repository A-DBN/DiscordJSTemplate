import { Event } from "../classes/events";
import { TextChannel, EmbedBuilder, Message } from "discord.js";

async function getBackup(channels: TextChannel): Promise<Number> {
    const lastmessage = await channels.messages.fetch({ limit: 1 });
    return Number(lastmessage.first()?.embeds[0].data.title?.replace(/[^0-9]/g, ""));
}

export default new Event({
    name: "messageDeleteBulk",
    run: async (client, messages) => {
        // Trigered when multiple messages are deleted
    },
});
