import { Event } from "../classes/events";

export default new Event({
    name: "ready",
    run: async client => {
        console.log("Deploying commands...");
        await client.deployCommands();
        console.log("Ready");
    },
});
