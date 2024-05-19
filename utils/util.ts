import { DiscordEmbedField } from "../deps.ts";
import { Assignment } from "./base.ts";

export const urlQueryBuilder = (url: string, date: Date) => {
  return url + "?year=" + date.getFullYear().toString() + "&month=" +
    (date.getMonth() + 1).toString() +
    "&day=" + date.getDate().toString();
};

export const markdownLinkBuilder = (description: string, link: string) => {
  return "[" + (description || "説明なし") + "](" + link + ")";
};
