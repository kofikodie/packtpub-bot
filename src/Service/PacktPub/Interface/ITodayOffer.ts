export interface ITodayOffer {
  data?: Array<OfferType> | null;
  count: number;
}
export interface OfferType {
  id: string;
  productId: string;
  availableFrom: string;
  expiresAt: string;
  limitedAmount: boolean;
  amountAvailable?: string | null;
  details?: string | null;
  priority: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}
