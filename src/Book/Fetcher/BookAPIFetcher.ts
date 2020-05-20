import { BookAPIFetcherInterface } from './BookAPIFetcherInterface';
import { BookBuilder } from '../Builder/BookBuilder';
import { PacktPubInterface } from '../../Service/PacktPub/PacktPubInterface';
import { Book } from '../Entity/Book';
import { Author } from '../Entity/Author';
import { AuthorInterface } from '../../Service/PacktPub/Interface/IAuthor';

export class BookAPIFetcher implements BookAPIFetcherInterface {
    constructor(private packtPubClient: PacktPubInterface, private bookBuilder: BookBuilder) {}

    async fetch(): Promise<Book> {
        const bookId = await this.packtPubClient.fetchTodayOffer();
        const bookData = await this.packtPubClient.fetchBookById(bookId);
        const coverURL = await this.packtPubClient.fetchCoverURLByBookId(bookId);
        const authorsCollectionsPromise: Promise<AuthorInterface>[] = bookData.authors.map((author: string) =>
            this.packtPubClient.fetchAuthorById(author),
        );
        const authorCollectionsData = await Promise.all(authorsCollectionsPromise);
        const authors = authorCollectionsData.map(
            (authorData: AuthorInterface) => new Author(Number(authorData.id), authorData.author),
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
