import { SlackBookSenderInterface } from "./SlackBookSenderInterface";
import { SlackClientInterface } from "../Service/Slack/SlackClientInterface";
import { BookToSlackMessageConverter } from "../Service/BookToSlackMessageConverter";
import { Book } from "../Book/Entity/Book";

export class SlackBookSender implements SlackBookSenderInterface {
  private slackClient: SlackClientInterface;
  private bookToSlackMessageConverter: BookToSlackMessageConverter;

  constructor(
    slackClient: SlackClientInterface,
    bookToSlackMessageConverter: BookToSlackMessageConverter
  ) {
    this.slackClient = slackClient;
    this.bookToSlackMessageConverter = bookToSlackMessageConverter;
  }

  send(book: Book): void {
    const message: JSON = this.bookToSlackMessageConverter.convert(book);
    this.slackClient.send(message);
  }
}
