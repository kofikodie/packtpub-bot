import {BookAPIFetcherInterface} from "./BookAPIFetcherInterface";
import {BookBuilder} from "../Builder/BookBuilder";
import {PacktPubInterface} from "../../Service/PacktPub/PacktPubInterface";
import {Book} from "../Entity/Book"
import {Arthor} from "../Entity/Arthor";
import moment from "moment";

export class BookAPIFetcher implements BookAPIFetcherInterface {
    private _packtPubClient: PacktPubInterface;
    private _bookBuilder: BookBuilder;

    constructor(packtPubClient: PacktPubInterface, bookBuilder: BookBuilder) {
        this._packtPubClient = packtPubClient;
        this._bookBuilder = bookBuilder;
    }

    async fetch(): Promise<Book> {
        let todaysOfferData = await this._packtPubClient.fetchTodayOffer();
        let bookData = await this._packtPubClient.fetchBookById(todaysOfferData);
        let coverURL = await this._packtPubClient.fetchCoverURLByBookId(todaysOfferData);

        return this._bookBuilder
            .id(todaysOfferData.productId)
            .title(bookData.title)
            .description(bookData.oneLiner)
            .arthor([new Arthor(3223, 'Test'), new Arthor(344, 'Testiamo')])
            .coverURL(coverURL)
            .publicationDate(moment(new Date()).format("YYYY-MM-DD"))
            .build();
    }
}