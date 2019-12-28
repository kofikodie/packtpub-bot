import commander from "commander";
import {BookAPIFetcher} from "./src/Book/Fetcher/BookAPIFetcher"
import {Book} from "./src/Book/Entity/Book";
import {BookBuilder} from "./src/Book/Builder/BookBuilder";
import {PacktPubClient} from "./src/Service/PacktPub/PacktPubClient";
import {SlackBookSender} from "./src/Sender/SlackBookSender";
import {SlackClient} from "./src/Service/Slack/SlackClient";
import {BookToSlackMessageConverter} from "./src/Service/BookToSlackMessageConverter";
import dotenv from "dotenv"

dotenv.config(); //Load env file

commander.version("1.0.0").description("Send free packtpub book to slack");
commander
    .command("send")
    .alias("s")
    .description("greet in console")
    .action(() => {
        let bookApifetcher = new BookAPIFetcher(new PacktPubClient, new BookBuilder).fetch();
        bookApifetcher
            .then((book: Book) => {
                let slackBookSender = new SlackBookSender(new SlackClient(process.env.SLACK_WEBHOOKS), new BookToSlackMessageConverter());
                slackBookSender.send(book)
            })
            .catch((error: Book) => {
                console.log(error);
            });
    });
commander.parse(process.argv);
