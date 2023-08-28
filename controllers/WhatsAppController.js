const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const process = require("../services/Process");



const VerifyToken = function (req, res) {
  try {
    const verifyToken = process.env.VERIFY_TOKEN;
    const reqToken = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (challenge && reqToken && reqToken == verifyToken) {
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.sendStatus(400);
  }
};

const ReceivedMessage = function (req, res) {
  try {
    console.log(req.body);
    let entry = req.body["entry"][0];
    let changes = entry["changes"][0];
    let value = changes["value"];
    let message = value.messages;

    if(typeof message != "undefined"){
            let messages = message[0];
            let number = messages["from"];

            let text = GetTextUser(messages);
            console.log(text);
            
            if(text != ""){
                process.Process(text, number);
            } 

        }

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(404);
  }
};


function GetTextUser(messages){
    var text = "";
    var typeMessge = messages["type"];
    if(typeMessge == "text"){
        text = (messages["text"])["body"];
    }
    else if(typeMessge == "interactive"){

        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];
        
        if(typeInteractive == "button_reply"){
            text = (interactiveObject["button_reply"])["title"];
        }
        else if(typeInteractive == "list_reply"){
            text = (interactiveObject["list_reply"])["title"];
        }else{
            myConsole.log("sin mensaje");
        }
    }else{
        myConsole.log("sin mensaje");
    }
    return text;
}


module.exports = {
  VerifyToken,
  ReceivedMessage,
};
