///<reference path="SlackClientInterface.ts"/>
import axios from "axios";

class SlackClient implements SlackClientInterface {
    private _client: SlackClientInterface;
    private _webHook: string;

    constructor(client: SlackClientInterface, webHook: string) {
        this._client = client;
        this._webHook = webHook;
    }

    async send(message: string): Promise<void> {
        await axios.post(this._webHook, message,
            {
                headers:
                    {'Content-Type': 'application/json'}
            }
        )
    }

}