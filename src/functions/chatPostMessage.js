import dotenv from "dotenv";
import https from "https";

dotenv.config();

function chatPostMessage(text, channel) {
    const options = {
        hostname: "slack.com",
        port: 443,
        path: "/api/chat.postMessage",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": process.env.AUTH
        }
    };

    const body = JSON.stringify({
        // Set the input text here
        text: text,
        channel: channel
    });
    
    const request = https.request(options, (res) => {
        res.on("data", (chunk) => {
            console.log(JSON.parse(chunk));
        });
     });
    
    request.write(body);
    request.end();
}

export { chatPostMessage };