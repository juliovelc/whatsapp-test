const msg = require('../Models/Messages');
const service = require('./WhatsService');

let models = [];
let appointment;
let personSelected;

function Process(textUser, number){
    number = 525519859354;
    textUser= textUser.toLowerCase();
  
  if (textUser.includes("hola")) {
     models.push(msg.Greeting(number));
    console.log("sending greeting")
  }
  
  if (textUser.includes("¡agenda tu cita!")) {
    models.push(msg.Terapeutas(number));
    appointment = true;
  }

  if (appointment && textUser == "charly" || textUser == "leopoldo" || textUser == "eduardo") {

    models.push(msg.Horarios(number));
    personSelected = true
  }
  
 if (appointment && personSelected && textUser.includes("9:30")) {
   models.push(msg.Confirm(number));
   personSelected = false;
   appointment = false;
 }
  
  

  models.forEach(model => {
    service.SendMessageWhatsApp(model);
  });
  models = [];
}

module.exports = { Process }