# packtpub-bot

🤖 Simple chat bot for sending daily Packt Publishing Free eBooks to your Slack channel

To get up and running with docker you will need to:

1. Create an .env file and set environment variable:
    ```bash
    SLACK_WEBHOOKS="your-slack-channel-webhook"
    ```
2. Build your image
    ```bash
     docker build -t nameOfYourImage:version .
    ```

3. Run your image
    ```bash
     docker run --rm nameOfYourImage:version yarn start
    ```
Alternatively, to run the application without docker you need to

1. follow the first step stated above

2. run  ```yarn set version berry```

3. run  ```yarn```

4. Follow the guide on the link to setup your IDE
https://yarnpkg.com/advanced/editor-sdks

5. run ```yarn start```