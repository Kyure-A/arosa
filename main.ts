import {
  createBot,
  Intents,
  InteractionResponseTypes,
  startBot,
  transformEmbed,
} from "./deps.ts";
import { Classroom } from "./utils/classroom.ts";
import { listCommand, pingCommand } from "./utils/commands.ts";
import { env } from "./utils/env.ts";

const bot = createBot({
  token: env.discord_token,
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
  events: {
    ready: (_bot, payload) => {
      console.log(`${payload.user.username} is ready!`);
    },
    async interactionCreate(client, interaction) {
      if (interaction.data?.name === "list") {
        const first = await client.helpers.sendInteractionResponse(
          interaction.id,
          interaction.token,
          {
            type: InteractionResponseTypes.ChannelMessageWithSource,
            data: {
              content: "loading...",
            },
          },
        );
        return await client.helpers.sendFollowupMessage(
          interaction.token,
          {
            type: InteractionResponseTypes.DeferredUpdateMessage,
            data: {
              embeds: [transformEmbed(bot, {
                title: "Assignments",
                fields: await (async () => {
                  const c = new Classroom();
                  await c.getAssignments(new Date());
                  return c.exportAsFields();
                })(),
              })],
            },
          },
        );
      }

      if (interaction.data?.name === "ping") {
        return await client.helpers.sendInteractionResponse(
          interaction.id,
          interaction.token,
          {
            type: InteractionResponseTypes.ChannelMessageWithSource,
            data: {
              content: "pong!",
            },
          },
        );
      }
    },
  },
});

await bot.helpers.upsertGuildApplicationCommands(env.guild_id, [
  listCommand,
  pingCommand,
]);

await startBot(bot);
