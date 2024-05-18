import { CreateSlashApplicationCommand } from "../deps.ts";

export const listCommand: CreateSlashApplicationCommand = {
  name: "list",
  description: "課題リストを表示します",
};

export const pingCommand: CreateSlashApplicationCommand = {
  name: "ping",
  description: "ping",
};
