import { IBook } from "./Interface/IBook";
import { IAuthor } from "./Interface/IAuthor";

export interface PacktPubInterface {
  fetchTodayOffer(): Promise<string>;

  fetchBookById(id: string): Promise<IBook>;

  fetchAuthorById(id: string): Promise<IAuthor>;

  fetchCoverURLByBookId(id: string): Promise<string | null>;
}
