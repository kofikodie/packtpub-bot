import { BlocksEntity, MessageInterface, Text } from './MessageInterface';
import { Book } from '../../../Book/Entity/Book';

export interface MessageImpInterface {
    convert(book: Book): MessageInterface;
    buildSection(): Section;
    buildAccessory(bookInfo: string, { coverURL, title }: BuildBlockEntityProps): BlocksEntity;
    buildAction(): BlocksEntity;
}

export interface BuildBlockEntityProps {
    coverURL: string;
    title: string;
}

export interface Section {
    type: string;
    text: Text;
}
