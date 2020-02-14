export interface IFetchBook {
  title: string;
  type: string;
  coverImage: string;
  productId: string;
  isbn13: string;
  oneLiner: string;
  pages: number;
  publicationDate: string;
  length: string;
  about: string;
  learn: string;
  features: string;
  authors: Array<string>;
  shopUrl: string;
  readUrl: string;
  category: string;
  earlyAccess: boolean;
  available: boolean;
}
