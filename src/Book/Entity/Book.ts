import {Arthor} from "./Arthor";

export class Book {
    private _id: number;
    private _title: string;
    private _author: Arthor[];
    private _publicationDate: string;
    private _description: string;
    private _coverURL: string;

    constructor(id: number, title: string, authors: Arthor[], publicationDate: string, description: string, coverURL: string) {
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

    get author(): Arthor[] {
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
