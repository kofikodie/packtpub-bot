import commander from "commander";
import { PacktPubClient } from "./src/Service/PacktPub/PacktPubClient";
commander.version("1.0.0").description("Bot retrieve free books");

commander
  .command("send")
  .alias("s")
  .description("greet in cnsole")
  .action(() => {
    let packtPubClient = new PacktPubClient();
    let todaysOfferResponse = packtPubClient.fetchTodayOffer();
    todaysOfferResponse
      .then(function(result) {
        console.log(result); // "Some User token"
      })
      .catch(function(error) {
        console.log(error);
      });
  });
commander.parse(process.argv);
