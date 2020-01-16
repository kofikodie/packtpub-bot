import {OfferType} from "./OfferType";

export interface IFetchTodayOffer {
    data: Array<OfferType>,
    count: number
}