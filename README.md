# packtpub-bot

🤖 Simple chat bot for sending daily Packt Publishing Free eBooks to your Slack channel

To get up and running with docker you will need to:

1. create an .env file and set environment variables:
    ```bash
    SLACK_WEBHOOKS="your-slack-channel-webhook"
    ```
2. Build your image run
    ```bash
     docker build -t nameOfYourImage:version .
    ```

3. Run your image with the following command:
    ```bash
     docker run --rm nameOfYourImage:version node dist/console.js send
    ```
Alternatively, to run the application without docker you need to

1. follow the first step stated above

2. run  ```npm install```

3. run ```node dist/console.js send```