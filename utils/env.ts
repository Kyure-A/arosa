import { dotenv } from "../deps.ts";

dotenv.loadSync({
  envPath: "~/.env",
  export: true
})

export const discord_token = Deno.env.get("DISCORD_TOKEN");
