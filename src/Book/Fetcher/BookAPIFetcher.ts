import {BookAPIFetcherInterface} from "./BookAPIFetcherInterface";
import {BookBuilder} from "../Builder/BookBuilder";
import {PacktPubInterface} from "../../Service/PacktPub/PacktPubInterface";
import {Book} from "../Entity/Book"
import {Author} from "../Entity/Author";

export class BookAPIFetcher implements BookAPIFetcherInterface {
    private _packtPubClient: PacktPubInterface;
    private _bookBuilder: BookBuilder;

    constructor(packtPubClient: PacktPubInterface, bookBuilder: BookBuilder) {
        this._packtPubClient = packtPubClient;
        this._bookBuilder = bookBuilder;
    }

    async fetch(): Promise<Book> {
        let todaysOfferData = await this._packtPubClient.fetchTodayOffer();
        let bookData = await this._packtPubClient.fetchBookById(todaysOfferData.data[0].productId);
        let coverURL = await this._packtPubClient.fetchCoverURLByBookId(todaysOfferData.data[0].productId);
        let authorsCollectionsPromise = bookData.authors.map((author: string) => {
            return this._packtPubClient.fetchAuthorById(author);
        });
        let authorCollectionsData = await Promise.all(authorsCollectionsPromise);
        let authors = authorCollectionsData.map((authorData: any) => {
            return new Author(authorData.id, authorData.author);
        });

        return this._bookBuilder
            .id(todaysOfferData.data[0].productId)
            .title(bookData.title)
            .description(bookData.oneLiner)
            .author(authors)
            .coverURL(coverURL)
            .publicationDate(bookData.publicationDate)
            .build();
    }
}