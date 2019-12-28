import {SlackBookSenderInterface} from "./SlackBookSenderInterface";
import {SlackClientInterface} from "../Service/Slack/SlackClientInterface"
import {BookToSlackMessageConverter} from "../Service/BookToSlackMessageConverter";
import {Book} from "../Book/Entity/Book";

export class SlackBookSender implements SlackBookSenderInterface {
    private _slackClient: SlackClientInterface;
    private _bookToSlackMessageConverter: BookToSlackMessageConverter;

    constructor(slackClient: SlackClientInterface, bookToSlackMessageConverter: BookToSlackMessageConverter) {
        this._slackClient = slackClient;
        this._bookToSlackMessageConverter = bookToSlackMessageConverter;
    }

    send(book: Book): void {
        let message: JSON = this._bookToSlackMessageConverter.convert(book);
        this._slackClient.send(message);
    }
}