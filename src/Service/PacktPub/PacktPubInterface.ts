import { BookInterface } from './Interface/IBook';
import { AuthorInterface } from './Interface/IAuthor';

export interface PacktPubInterface {
    fetchTodayOffer(): Promise<string>;

    fetchBookById(id: string): Promise<BookInterface>;

    fetchAuthorById(id: string): Promise<AuthorInterface>;

    fetchCoverURLByBookId(id: string): Promise<string | null>;
}
