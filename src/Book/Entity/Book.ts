import { Author } from './Author';

export class Book {
    constructor(
        private _id: number,
        private _title: string,
        private _authors: Author[],
        private _publicationDate: string,
        private _description: string,
        private _coverURL: string,
    ) {}

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get author(): Author[] {
        return this._authors;
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
