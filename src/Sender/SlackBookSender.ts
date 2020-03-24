import { SlackBookSenderInterface } from "./SlackBookSenderInterface";
import { SlackClientInterface } from "../Service/Slack/SlackClientInterface";
import { BookToSlackMessageConverter } from "../Service/Message/BookToSlackMessageConverter";
import { Book } from "../Book/Entity/Book";
import {MessageInterface} from "../Service/Message/Interface/MessageInterface";

export class SlackBookSender implements SlackBookSenderInterface {
   #slackClient: SlackClientInterface;
   #bookToSlackMessageConverter: BookToSlackMessageConverter;

  constructor(
    slackClient: SlackClientInterface,
    bookToSlackMessageConverter: BookToSlackMessageConverter
  ) {
    this.#slackClient = slackClient;
    this.#bookToSlackMessageConverter = bookToSlackMessageConverter;
  }

  send(book: Book): void {
    const message: MessageInterface = this.#bookToSlackMessageConverter.convert(book);
    this.#slackClient.send(message);
  }
}
