import commander from "commander";
import { BookAPIFetcher } from "./src/Book/Fetcher/BookAPIFetcher";
import { BookBuilder } from "./src/Book/Builder/BookBuilder";
import { PacktPubClient } from "./src/Service/PacktPub/PacktPubClient";
import { SlackBookSender } from "./src/Sender/SlackBookSender";
import { SlackClient } from "./src/Service/Slack/SlackClient";
import { BookToSlackMessageConverter } from "./src/Service/Message/BookToSlackMessageConverter";
import dotenv from "dotenv";

dotenv.config();

commander.version("1.0.0").description("Send free packtpub book to slack");
commander
  .command("send")
  .alias("s")
  .description("send message to slack channel")
  .action(async () => {
    try {
      const bookApifetcher = await new BookAPIFetcher(
        new PacktPubClient(),
        new BookBuilder()
      ).fetch();
      new SlackBookSender(
        new SlackClient(process.env.SLACK_WEBHOOKS),
        new BookToSlackMessageConverter()
      ).send(bookApifetcher);
    } catch (error) {
      console.log(`${error.message}`);
    }
  });
commander.parse(process.argv);
