import commander from "commander";
import {BookAPIFetcher} from "./src/Book/Fetcher/BookAPIFetcher"
import {Book} from "./src/Book/Entity/Book";
import {BookBuilder} from "./src/Book/Builder/BookBuilder";
import {PacktPubClient} from "./src/Service/PacktPub/PacktPubClient";

commander.version("1.0.0").description("Bot retrieve free books");

commander
    .command("send")
    .alias("s")
    .description("greet in cnsole")
    .action(() => {
        let bookApifetcher = new BookAPIFetcher(new PacktPubClient, new BookBuilder).fetch();
        bookApifetcher
            .then((result: Book) => {
                console.log(result.publicationDate);
            })
            .catch((error: Book) => {
                console.log(error);
            });
    });

commander.parse(process.argv);
