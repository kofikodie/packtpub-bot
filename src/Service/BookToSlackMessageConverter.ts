import {Book} from "../Book/Entity/Book";

export class BookToSlackMessageConverter {
    convert(book: Book): JSON {
        let messageData = [];
        messageData[0] = this.buildTitleBlock();
        messageData[1] = this.buildInfoBlock(book);
        messageData[2] = this.buildButtonsBlock();
        return JSON.parse(JSON.stringify(messageData));
    }

    private buildTitleBlock() {

        return {
            "type": "section",
            'text': {
                'type': 'plain_text',
                'text': "Today's Free eBook:",
            }
        };
    }

    private buildInfoBlock(book: Book) {
        return [""];
    }

    private buildButtonsBlock() {
        return [""]
    }
}