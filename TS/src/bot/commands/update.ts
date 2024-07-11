import { SlashCommandBuilder, CommandInteraction } from "discord.js";
import { Command } from "../classes/command";

export default new Command({
    builder: new SlashCommandBuilder()
        .setName("name")
        .setDescription("Main command description")
        .addSubcommand(subcommand =>
            subcommand
                .setName("subcommand1")
                .setDescription("subcommand description")
                // You can add as much options as you need here for subcommand1
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("subcommand2")
                .setDescription("subcommand description")
                // You can add as much options as you need here for subcommand2
        ) as SlashCommandBuilder,
    run: async ({ client, interaction }) => {
        if (!interaction.deferred && !interaction.replied) {
            await interaction.deferReply().catch(console.error);
        }
        const subcommand = interaction.options.getSubcommand();
        const subcommands: { [key: string]: (interaction: CommandInteraction) => Promise<void> } = {
            // Indicates your subcommands
            // exemple:
            // test: testFunction
            // This will call testFunction is subcommand test is called
        };

        try {
            await subcommands[subcommand](interaction);
        } catch (error) {
            if (!interaction.replied) {
                await interaction
                    .followUp({ content: `Error: ${(error as Error).message}`, ephemeral: true })
                    .catch(console.error);
            } else {
                await interaction.editReply(`Error: ${(error as Error).message}`).catch(console.error);
            }
        }
    },
    autocomplete: async interaction => {
        const focused = interaction.options.getFocused(true);
        let choices: { name: string; value: string }[] = [];

        // Add logic to separate the choices

        const filtered = choices.filter(choice => {})
        await interaction.respond(filtered.map(choice => ({ name: choice.name, value: choice.value })));
    },
});
