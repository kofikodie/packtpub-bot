import {BlocksEntity, MessageInterface, Text} from "./MessageInterface";
import { Book } from "../../../Book/Entity/Book";

export interface MessageImpInterface {
  convert(book: Book): MessageInterface;
  buildSection(): Section;
  buildAccessory(bookInfo: string, {coverURL, title }: buildBlockEntityProps): BlocksEntity;
  buildAction(): BlocksEntity;
}

export interface buildBlockEntityProps {
  coverURL: string;
  title: string;
}

export interface Section {
  type: string;
  text: Text;
}
