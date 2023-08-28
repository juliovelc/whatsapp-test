const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");
function SendMessageWhatsApp(data){
    
    const options = {
        host: "graph.facebook.com",
        path: "/v17.0/106484962513406/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env["WHATSAPP_TOKEN"]}`
        }
    };
    const req = https.request(options, res => {
      console.log(res.statusCode);
      if (res.statusCode == 400) {
        console.log(res);
      }
        res.on("data", d=> {
            process.stdout.write(d);
        });
      
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
    console.log("success sending message")
}

module.exports = {
    SendMessageWhatsApp
};