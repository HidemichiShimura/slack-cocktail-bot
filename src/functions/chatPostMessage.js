const dotenv = require("dotenv");
const https = require("https");

dotenv.config();

const OPTIONS = {
    hostname: "slack.com",
    port: 443,
    path: "/api/chat.postMessage",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.AUTH
    }
};

function chatPostMessage(text, channel) {
    const Body = JSON.stringify({
        // Set the input text here
        text: text,
        channel: channel
    });
    
    const request = https.request(OPTIONS, (res) => {
        res.on("data", (chunk) => {
            console.log(JSON.parse(chunk));
        });
     });
    
    request.write(Body);
    request.end();
}

module.exports = chatPostMessage;