import axios from "axios";
import { SlackClientInterface } from "./SlackClientInterface";

export class SlackClient implements SlackClientInterface {
  readonly webHook: string;

  constructor(webHook: string) {
    this.webHook = webHook;
  }

  async send(message: JSON): Promise<void> {
    try {
      await axios.post(this.webHook, message, {
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      console.error(error);
    }
  }
}
