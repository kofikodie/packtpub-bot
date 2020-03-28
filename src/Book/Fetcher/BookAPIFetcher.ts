import { BookAPIFetcherInterface } from "./BookAPIFetcherInterface";
import { BookBuilder } from "../Builder/BookBuilder";
import { PacktPubInterface } from "../../Service/PacktPub/PacktPubInterface";
import { Book } from "../Entity/Book";
import { Author } from "../Entity/Author";
import { IAuthor } from "../../Service/PacktPub/Interface/IAuthor";

export class BookAPIFetcher implements BookAPIFetcherInterface {
  constructor(
    private packtPubClient: PacktPubInterface,
    private bookBuilder: BookBuilder
  ) {}

  async fetch(): Promise<Book> {
    let bookId = await this.packtPubClient.fetchTodayOffer();
    let bookData = await this.packtPubClient.fetchBookById(bookId);
    let coverURL = await this.packtPubClient.fetchCoverURLByBookId(bookId);
    let authorsCollectionsPromise: Promise<
      IAuthor
    >[] = bookData.authors.map((author: string) =>
      this.packtPubClient.fetchAuthorById(author)
    );
    let authorCollectionsData = await Promise.all(authorsCollectionsPromise);
    let authors = authorCollectionsData.map(
      (authorData: IAuthor) =>
        new Author(Number(authorData.id), authorData.author)
    );

    return this.bookBuilder
      .id(Number(bookId))
      .title(bookData.title)
      .description(bookData.oneLiner)
      .author(authors)
      .coverURL(coverURL)
      .publicationDate(bookData.publicationDate)
      .build();
  }
}
