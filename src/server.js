const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const chatPostMessage = require("./functions/chatPostMessage");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is runnning");
});

app.post("/", (req, res) => {
    // Respond to the URL verification
    res.set({
        'Content-Type': 'text/plain'
    });
    res.send(req.body.challenge);

    // Event handling: the event "app_mention"
    if (req.body.event.type === "app_mention") {
        const channelID = req.body.event.channel;

        chatPostMessage("Hi", channelID);
    }
});