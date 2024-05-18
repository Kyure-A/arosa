import { DiscordEmbedField } from "../deps.ts";
import { ArosaBase, Assignment } from "./base.ts";
import { env } from "./env.ts";

type ClassroomResponse =
  | { status: "error"; value: undefined }
  | { status: "ok"; value: Array<Assignment> };

const urlQueryBuilder = (url: string, date: Date) => {
  return url + "?year=" + date.getFullYear() + "&month=" + date.getMonth() +
    "&day=" + date.getDate();
};

export class Classroom implements ArosaBase {
  assignments: Array<Assignment> | undefined = undefined;
  async getAssignments(date: Date): Promise<Array<Assignment> | undefined> {
    const response: Promise<ClassroomResponse> =
      (await fetch(urlQueryBuilder(env.classroom_url, date))).json();
    const value = (await response).value;
    this.assignments = value;

    return value;
  }

  exportAsFields(): Array<DiscordEmbedField> | undefined {
    if (this.assignments === undefined) return undefined;

    return this.assignments.map((x): DiscordEmbedField => {
      return {
        name: x.name + "(" + "期限: " + x.dueDate?.year + "/" + x.dueDate?.month + "/" + x.dueDate?.day + ")",
        value: "[" + x.description ?? "説明なし" + "](" + x.link + ")",
        inline: false,
      };
    });
  }
}
