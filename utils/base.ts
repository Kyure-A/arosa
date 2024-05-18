import { DiscordEmbedField } from "../deps.ts";

export type Assignment = {
  name: string;
  description: string;
  dueDate: {
    year: number;
    month: number;
    day: number;
  } | undefined;
  link: string;
};

export interface ArosaBase {
  assignments: Array<Assignment> | undefined;
  getAssignments(date: Date): Promise<Array<Assignment> | undefined>;
  exportAsFields(): Array<DiscordEmbedField> | undefined;
}
