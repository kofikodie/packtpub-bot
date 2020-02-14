import { Book } from "../Entity/Book";
import { BookBuilderInterface } from "./BookBuilderInterface";
import { Author } from "../Entity/Author";

export class BookBuilder implements BookBuilderInterface {
  private _id: number;
  private _title: string;
  private _authors: Author[];
  private _publicationDate: string;
  private _description: string;
  private _coverURL: string;

  id(id: number): BookBuilder {
    this._id = id;
    return this;
  }

  title(title: string): BookBuilder {
    this._title = title;
    return this;
  }

  author(authors: Author[]): BookBuilder {
    this._authors = authors;
    return this;
  }

  publicationDate(publicationDate: string): BookBuilder {
    this._publicationDate = publicationDate;
    return this;
  }

  description(description: string): BookBuilder {
    this._description = description;
    return this;
  }

  coverURL(coverURL: string): BookBuilder {
    this._coverURL = coverURL;
    return this;
  }

  build(): Book {
    return new Book(
      this._id,
      this._title,
      this._authors,
      this._publicationDate,
      this._description,
      this._coverURL
    );
  }
}
