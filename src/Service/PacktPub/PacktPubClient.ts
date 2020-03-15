import axios from "axios";
import moment from "moment";
import { PacktPubInterface } from "./PacktPubInterface";
import { IFetchBook } from "./Interface/IFetchBook";
import { IFetchAuthor } from "./Interface/IFetchAuthor";
import { IFetchTodayOffer } from "./Interface/IFetchTodayOffer";

export class PacktPubClient implements PacktPubInterface {
    #OFFER_URL: string =
    "https://services.packtpub.com/free-learning-v1/offers";
    #BOOK_URL: string = "https://static.packt-cdn.com/products";
    #AUTHOR_URL: string = "https://static.packt-cdn.com/authors";

  async fetchCoverURLByBookId(id: string): Promise<string> {
    return `https://static.packt-cdn.com/products/${id}/cover/smaller`;
  }

  async fetchAuthorById(id: string): Promise<IFetchAuthor> {
    let response = await axios.get(`${this.#AUTHOR_URL}/${id}`);
    return response.data;
  }

  async fetchBookById(id: string): Promise<IFetchBook> {
    let response = await axios.get(`${this.#BOOK_URL}/${id}/summary`);
    return response.data;
  }

  async fetchTodayOffer(): Promise<IFetchTodayOffer> {
    let todaysDateFormated: string = moment(new Date()).format("YYYY-MM-DD");
    let tommorrowDateFormated: string = moment(new Date())
      .add(1, "days")
      .format("YYYY-MM-DD");

    let response = await axios.get(
      `${this.#OFFER_URL}?dateFrom=${todaysDateFormated}&dateTo=${tommorrowDateFormated}`
    );
    return response.data;
  }
}
