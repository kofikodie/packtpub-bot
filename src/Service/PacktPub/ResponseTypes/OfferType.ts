export type OfferType = {
    id: string;
    productId: string,
    availableFrom: string,
    expiresAt: string,
    limitedAmount: boolean,
    amountAvailable?: string,
    details?: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string
};