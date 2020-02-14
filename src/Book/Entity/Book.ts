import { Author } from "./Author";

export class Book {
  readonly #id: number;
  readonly #title: string;
  readonly #author: Author[];
  readonly #publicationDate: string;
  readonly #description: string;
  readonly #coverURL: string;

  constructor(
    id: number,
    title: string,
    authors: Author[],
    publicationDate: string,
    description: string,
    coverURL: string
  ) {
    this.#id = id;
    this.#title = title;
    this.#author = authors;
    this.#publicationDate = publicationDate;
    this.#description = description;
    this.#coverURL = coverURL;
  }

  get id(): number {
    return this.#id;
  }

  get title(): string {
    return this.#title;
  }

  get author(): Author[] {
    return this.#author;
  }

  get publicationDate(): string {
    return this.#publicationDate;
  }

  get description(): string {
    return this.#description;
  }

  get coverURL(): string {
    return this.#coverURL;
  }
}
