export interface PacktPubInterface {
    fetchTodayOffer(): Promise<any>;

    fetchBookById(id: string): Promise<any>;

    fetchAuthorById(id: string): Promise<any>;

    fetchCoverURLByBookId(id: string): Promise<any>;
}
