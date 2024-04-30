import { dotenv } from "../deps.ts";

dotenv.loadSync({
  envPath: "~/.env",
  export: true
})

export const env = {
  discord_token: Deno.env.get("DISCORD_TOKEN") ?? "",
  guild_id: Deno.env.get("GUILD_ID") ?? "",
}
