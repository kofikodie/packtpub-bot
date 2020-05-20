import { BlocksEntity, MessageInterface } from './Interface/MessageInterface';
import { BuildBlockEntityProps, MessageImpInterface, Section } from './Interface/MessageImpInterface';
import { Author } from '../../Book/Entity/Author';
import { Book } from '../../Book/Entity/Book';

export class BookToSlackMessageConverter implements MessageImpInterface {
    convert(book: Book): MessageInterface {
        let bookInfo = `*${book.title}*\n`;
        book.author.forEach((author: Author) => {
            bookInfo += `_${author.name}_\n`;
        });
        bookInfo += '\n';
        bookInfo += `${book.publicationDate}\n`;
        bookInfo += `${book.description}\n`;

        const { coverURL, title } = book;
        return {
            blocks: [this.buildSection(), this.buildAccessory(bookInfo, { coverURL, title }), this.buildAction()],
        };
    }

    buildSection(): Section {
        return {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: "Today's Free eBook:",
            },
        };
    }

    buildAccessory(bookInfo: string, { coverURL, title }: BuildBlockEntityProps): BlocksEntity {
        return {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `${bookInfo}`,
            },
            accessory: {
                type: 'image',
                image_url: `${coverURL}`,
                alt_text: `${title}`,
            },
        };
    }

    buildAction(): BlocksEntity {
        return {
            type: 'actions',
            elements: [
                {
                    type: 'button',
                    text: {
                        type: 'plain_text',
                        text: 'Claim now',
                        emoji: true,
                    },
                    style: 'primary',
                    url: 'https://www.packtpub.com/free-learning',
                },
            ],
        };
    }
}
