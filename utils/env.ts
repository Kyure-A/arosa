import { dotenv } from "../deps.ts";

try {
  dotenv.loadSync({
    envPath: "~/.env",
    export: true,
  });
} catch {
  // nop
}

export const env = {
  classroom_url: Deno.env.get("CLASSROOM_URL") ?? "",
  discord_token: Deno.env.get("DISCORD_TOKEN") ?? "",
  guild_id: Deno.env.get("GUILD_ID") ?? "",
};
