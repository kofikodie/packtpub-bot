import { Book } from '../Entity/Book';
import { BookBuilderInterface } from './BookBuilderInterface';
import { Author } from '../Entity/Author';

export class BookBuilder implements BookBuilderInterface {
    #id: number;
    #title: string;
    #authors: Author[];
    #publicationDate: string;
    #description: string;
    #coverURL: string;

    id(id: number): BookBuilder {
        this.#id = id;
        return this;
    }

    title(title: string): BookBuilder {
        this.#title = title;
        return this;
    }

    author(authors: Author[]): BookBuilder {
        this.#authors = authors;
        return this;
    }

    publicationDate(publicationDate: string): BookBuilder {
        this.#publicationDate = publicationDate;
        return this;
    }

    description(description: string): BookBuilder {
        this.#description = description;
        return this;
    }

    coverURL(coverURL: string): BookBuilder {
        this.#coverURL = coverURL;
        return this;
    }

    build(): Book {
        return new Book(this.#id, this.#title, this.#authors, this.#publicationDate, this.#description, this.#coverURL);
    }
}
