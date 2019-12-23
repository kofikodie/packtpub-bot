import {Book} from "../Entity/Book";

export interface BookBuilderInterface {
    build(): Book;
}