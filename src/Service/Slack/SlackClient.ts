import axios from "axios";
import {SlackClientInterface} from "./SlackClientInterface";

export class SlackClient implements SlackClientInterface {
    private readonly _webHook: string;

    constructor(webHook: string) {
        this._webHook = webHook;
    }

    async send(message: JSON): Promise<void> {
        try {
            await axios.post(this._webHook, message,
                {
                    headers:
                        {'Content-Type': 'application/json'}
                }
            )
        }catch (error) {
            console.error(error);
        }
    }

}