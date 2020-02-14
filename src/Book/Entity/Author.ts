export class Author {
   #id: number;
   #name: string;

  constructor(id: number, name: string) {
    this.#id = id;
    this.#name = name;
  }

  get id(): number {
    return this.#id;
  }

  set id(value: number) {
    this.#id = value;
  }

  get name(): string {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
  }
}
