import { graph } from "../deps.ts";

export class Teams {
  constructor(token: string) {}
  
  async assignments() {
    const url = "https://graph.microsoft.com/v1.0/education/me/assignments";
    const response = await fetch(url);
    return response;
  }
}
