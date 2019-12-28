import {Book} from "../Book/Entity/Book";
import {Author} from "../Book/Entity/Author";

export class BookToSlackMessageConverter {
    convert(book: Book): JSON {
        let bookInfo = `*${book.title}*\n`;
        book.author.forEach((author: Author) => {
            bookInfo += `_${author.name}_\n`;
        });
        bookInfo += '\n';
        bookInfo += `${book.publicationDate}\n`;
        bookInfo += `${book.description}\n`;

        let messageData = {
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Today's Free eBook:"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `${bookInfo}`
                    },
                    "accessory": {
                        "type": "image",
                        "image_url": `${book.coverURL}`,
                        "alt_text": `${book.title}`
                    }
                },
                {
                    "type": "actions",
                    "elements": [
                        {
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "text": "Button",
                                "emoji": true
                            },
                            "style": "primary",
                            "url": "https://www.packtpub.com/free-learning"
                        }
                    ]
                }
            ]
        };
        return JSON.parse(JSON.stringify(messageData));
    }
}