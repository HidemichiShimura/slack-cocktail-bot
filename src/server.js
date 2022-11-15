const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is runnning");
});

app.post("/", (req, res) => {
    // Respond to the URL verification
    res.set({
        'Content-Type': 'text/plain'
    });
    res.send(req.body.challenge);
});