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
        const todaysOfferData = await this._packtPubClient.fetchTodayOffer();
        const [data] = todaysOfferData;
        const { productId } = data;
        let bookData = await this._packtPubClient.fetchBookById(productId);
        let coverURL = await this._packtPubClient.fetchCoverURLByBookId(productId);
        let authorsCollectionsPromise: Promise<any>[] = bookData.authors.map((author: string) => this._packtPubClient.fetchAuthorById(author));
        let authorCollectionsData = await Promise.all(authorsCollectionsPromise);
        let authors = authorCollectionsData.map((authorData: any) => {
            return new Author(authorData.id, authorData.author);
        });

        return this._bookBuilder
            .id(productId)
            .title(bookData.title)
            .description(bookData.oneLiner)
            .author(authors)
            .coverURL(coverURL)
            .publicationDate(bookData.publicationDate)
            .build();
    }
}