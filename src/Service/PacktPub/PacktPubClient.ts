import axios, { AxiosInstance } from 'axios';
import moment from 'moment';
import { PacktPubInterface } from './PacktPubInterface';
import { BookInterface } from './Interface/IBook';
import { AuthorInterface } from './Interface/IAuthor';
import { TodayOfferInterface } from './Interface/ITodayOffer';

export class PacktPubClient implements PacktPubInterface {
    readonly #OFFER_URL: string = 'https://services.packtpub.com/free-learning-v1/offers';

    readonly #BOOK_URL: string = 'products';
    readonly #AUTHOR_URL: string = 'authors';
    readonly #apiClient: AxiosInstance = axios.create({
        baseURL: 'https://static.packt-cdn.com/',
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    async fetchCoverURLByBookId(id: string): Promise<string> {
        return `https://static.packt-cdn.com/products/${id}/cover/smaller`;
    }

    async fetchAuthorById(id: string): Promise<AuthorInterface> {
        const response = await this.#apiClient.get<AuthorInterface>(`${this.#AUTHOR_URL}/${id}`);

        return response.data;
    }

    async fetchBookById(id: string): Promise<BookInterface> {
        const response = await this.#apiClient.get<BookInterface>(`${this.#BOOK_URL}/${id}/summary`);

        return response.data;
    }

    async fetchTodayOffer(): Promise<string> {
        const todaysDateFormated: string = moment(new Date()).format('YYYY-MM-DD');
        const tommorrowDateFormated: string = moment(new Date()).add(1, 'days').format('YYYY-MM-DD');

        const response = await this.#apiClient.get<TodayOfferInterface>(
            `${this.#OFFER_URL}/?dateFrom=${todaysDateFormated}&dateTo=${tommorrowDateFormated}`,
        );

        return response.data.data[0].productId;
    }
}
