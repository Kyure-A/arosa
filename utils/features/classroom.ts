import { DiscordEmbedField, ca } from "../../deps.ts";
import { Feature } from "./feature.ts";

export class Classroom implements Feature {
  getAssignments() {
    
  }

  exportAsFields(): Array<DiscordEmbedField> {
    const field = [
      {
        name: "name",
        value: "value",
        inline: false
      },
      {
        name: "name",
        value: "value",
        inline: false
      }
    ]
    
    return field;
  }
}
