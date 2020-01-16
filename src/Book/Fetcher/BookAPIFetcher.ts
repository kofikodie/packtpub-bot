import {BookAPIFetcherInterface} from "./BookAPIFetcherInterface";
import {BookBuilder} from "../Builder/BookBuilder";
import {PacktPubInterface} from "../../Service/PacktPub/PacktPubInterface";
import {Book} from "../Entity/Book"
import {Author} from "../Entity/Author";
import {IFetchBook} from "../../Service/PacktPub/ResponseTypes/IFetchBook";
import {IFetchTodayOffer} from "../../Service/PacktPub/ResponseTypes/IFetchTodayOffer";
import {IFetchAuthor} from "../../Service/PacktPub/ResponseTypes/IFetchAuthor";

export class BookAPIFetcher implements BookAPIFetcherInterface {
    private _packtPubClient: PacktPubInterface;
    private _bookBuilder: BookBuilder;

    constructor(packtPubClient: PacktPubInterface, bookBuilder: BookBuilder) {
        this._packtPubClient = packtPubClient;
        this._bookBuilder = bookBuilder;
    }

    async fetch(): Promise<Book> {
        let todaysOfferData: IFetchTodayOffer = await this._packtPubClient.fetchTodayOffer();
        let bookData: IFetchBook = await this._packtPubClient.fetchBookById(todaysOfferData.data[0].productId);
        let coverURL: string = await this._packtPubClient.fetchCoverURLByBookId(todaysOfferData.data[0].productId);
        let authorsCollectionsPromise: Promise<IFetchAuthor>[] = bookData.authors.map((author: string) => {
            return this._packtPubClient.fetchAuthorById(author);
        });
        let authorCollectionsData: Array<IFetchAuthor> = await Promise.all(authorsCollectionsPromise);
        let authors: Array<Author> = authorCollectionsData.map((authorData: IFetchAuthor) => {
            return new Author(Number(authorData.id), authorData.author);
        });

        return this._bookBuilder
            .id(Number(todaysOfferData.data[0].productId))
            .title(bookData.title)
            .description(bookData.oneLiner)
            .author(authors)
            .coverURL(coverURL)
            .publicationDate(bookData.publicationDate)
            .build();
    }
}