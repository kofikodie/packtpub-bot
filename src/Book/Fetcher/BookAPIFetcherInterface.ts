import { Book } from '../Entity/Book';

export interface BookAPIFetcherInterface {
    fetch(): Promise<Book>;
}
