import { Author } from "./Author";

export class Book {
  private readonly _id: number;
  private readonly _title: string;
  private readonly _author: Author[];
  private readonly _publicationDate: string;
  private readonly _description: string;
  private readonly _coverURL: string;

  constructor(
    id: number,
    title: string,
    authors: Author[],
    publicationDate: string,
    description: string,
    coverURL: string
  ) {
    this._id = id;
    this._title = title;
    this._author = authors;
    this._publicationDate = publicationDate;
    this._description = description;
    this._coverURL = coverURL;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get author(): Author[] {
    return this._author;
  }

  get publicationDate(): string {
    return this._publicationDate;
  }

  get description(): string {
    return this._description;
  }

  get coverURL(): string {
    return this._coverURL;
  }
}
