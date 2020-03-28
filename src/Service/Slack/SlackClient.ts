import axios from "axios";
import { SlackClientInterface } from "./SlackClientInterface";
import { MessageInterface } from "../Message/Interface/MessageInterface";

export class SlackClient implements SlackClientInterface {
  constructor(private webHook: string) {}

  async send(message: MessageInterface): Promise<void> {
    try {
      await axios.post(this.webHook, message, {
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      console.error(error);
    }
  }
}
