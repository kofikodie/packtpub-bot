import axios from "axios";
import moment from "moment";
export class PacktPubClient implements PacktPubInterface {
  readonly todaysOffersEndPoint: string =
    "https://services.packtpub.com/free-learning-v1/offers";
  async fetchTodayOffer(): Promise<any> {
    let todaysDateFormated: string = moment(new Date()).format("YYYY-MM-DD");
    let tommorrowDateFormated: string = moment(new Date())
      .add(1, "days")
      .format("YYYY-MM-DD");

    let todaysOfferResponse: string;
    let response = await axios.get(
      this.todaysOffersEndPoint +
        "?dateFrom=" +
        todaysDateFormated +
        "&dateTo=" +
        tommorrowDateFormated
    );
    return (todaysOfferResponse = response.data);
  }
}
