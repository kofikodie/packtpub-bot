import {MessageInterface} from "../Message/Interface/MessageInterface";

export interface SlackClientInterface {
  send(message: MessageInterface): void;
}
