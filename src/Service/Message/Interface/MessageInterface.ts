export interface MessageInterface {
    blocks?: Partial<ElementsEntity>[];
}
export interface BlocksEntity {
    type: string;
    text?: Text | null;
    accessory?: Accessory | null;
    elements?: Array<ElementsEntity>;
}
export interface Text {
    type: string;
    text: string;
    emoji?: boolean;
}
export interface Accessory {
    type: string;
    image_url: string;
    alt_text: string;
}
export interface ElementsEntity {
    type: string;
    text: Text;
    style: string;
    url: string;
}
