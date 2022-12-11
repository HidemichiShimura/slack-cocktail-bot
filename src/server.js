import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { chatPostMessage } from "./functions/chatPostMessage.js";
import { lookupRandomCocktail } from "./functions/lookupRandomCocktail.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

app.listen(process.env.PORT, () => {
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
        const drinkName = lookupRandomCocktail();
       
        drinkName.then((drink) => {
            chatPostMessage(drink, channelID);
        });
    }
});