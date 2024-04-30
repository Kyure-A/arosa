import { createBot, Intents, startBot } from "./deps.ts";
import { env } from "./utils/env.ts";

const bot = createBot({
  token: env.discord_token,
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
  events: {
    ready: (_bot, payload) => {
      console.log(`${payload.user.username} is ready!`)
    },
  },
})

await startBot(bot);
