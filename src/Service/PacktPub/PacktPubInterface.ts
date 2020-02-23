import { IFetchBook } from "./Interface/IFetchBook";
import { IFetchAuthor } from "./Interface/IFetchAuthor";
import { IFetchTodayOffer } from "./Interface/IFetchTodayOffer";

export interface PacktPubInterface {
  fetchTodayOffer(): Promise<IFetchTodayOffer>;

  fetchBookById(id: string): Promise<IFetchBook>;

  fetchAuthorById(id: string): Promise<IFetchAuthor>;

  fetchCoverURLByBookId(id: string): Promise<string | null>;
}
