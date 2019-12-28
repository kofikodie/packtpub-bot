import {Book} from "../Book/Entity/Book";

export interface SlackBookSenderInterface {
    send(book: Book): void;
}