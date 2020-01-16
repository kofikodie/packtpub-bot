import {IFetchBook} from "./ResponseTypes/IFetchBook";
import {IFetchAuthor} from "./ResponseTypes/IFetchAuthor";
import {IFetchTodayOffer} from "./ResponseTypes/IFetchTodayOffer";

export interface PacktPubInterface {
    fetchTodayOffer(): Promise<IFetchTodayOffer>;

    fetchBookById(id: string): Promise<IFetchBook>;

    fetchAuthorById(id: string): Promise<IFetchAuthor>;

    fetchCoverURLByBookId(id: string): Promise<string | null>;
}
