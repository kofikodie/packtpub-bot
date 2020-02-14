import { BookAPIFetcherInterface } from "./BookAPIFetcherInterface";
import { BookBuilder } from "../Builder/BookBuilder";
import { PacktPubInterface } from "../../Service/PacktPub/PacktPubInterface";
import { Book } from "../Entity/Book";
import { Author } from "../Entity/Author";
import { IFetchBook } from "../../Service/PacktPub/ResponseTypes/IFetchBook";
import { IFetchTodayOffer } from "../../Service/PacktPub/ResponseTypes/IFetchTodayOffer";
import { IFetchAuthor } from "../../Service/PacktPub/ResponseTypes/IFetchAuthor";

export class BookAPIFetcher implements BookAPIFetcherInterface {
  #packtPubClient: PacktPubInterface;
  #bookBuilder: BookBuilder;

  constructor(packtPubClient: PacktPubInterface, bookBuilder: BookBuilder) {
    this.#packtPubClient = packtPubClient;
    this.#bookBuilder = bookBuilder;
  }

  async fetch(): Promise<Book> {
    let todaysOfferData: IFetchTodayOffer = await this.#packtPubClient.fetchTodayOffer();
    let bookData: IFetchBook = await this.#packtPubClient.fetchBookById(
      todaysOfferData.data[0].productId
    );
    let coverURL: string = await this.#packtPubClient.fetchCoverURLByBookId(
      todaysOfferData.data[0].productId
    );
    let authorsCollectionsPromise: Promise<
      IFetchAuthor
    >[] = bookData.authors.map((author: string) => {
      return this.#packtPubClient.fetchAuthorById(author);
    });
    let authorCollectionsData: Array<IFetchAuthor> = await Promise.all(
      authorsCollectionsPromise
    );
    let authors: Array<Author> = authorCollectionsData.map(
      (authorData: IFetchAuthor) => {
        return new Author(Number(authorData.id), authorData.author);
      }
    );

    return this.#bookBuilder
      .id(Number(todaysOfferData.data[0].productId))
      .title(bookData.title)
      .description(bookData.oneLiner)
      .author(authors)
      .coverURL(coverURL)
      .publicationDate(bookData.publicationDate)
      .build();
  }
}
