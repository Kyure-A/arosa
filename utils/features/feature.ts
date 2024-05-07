import { DiscordEmbedField } from "../../deps.ts";

export interface Feature {
  exportAsFields(): Array<DiscordEmbedField>;
}
