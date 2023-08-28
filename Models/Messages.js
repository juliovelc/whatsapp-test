function Greeting(number) {
  let message = `👋 ¡*FIX ME PHYSIO* te da la bienvenida! 👋 🧠🫀🩻

💯 Con nosotros, tu salud y bienestar es primero, es por eso que buscamos certificarnos en diversas especializaciones para hacer tu terapia más amena y centrada en tu pronta recuperación o mejora. 

🏆 Brindamos un servicio de calidad por un precio accesible, el costo por sesión más valoración ecográfica musculoesquelética es de sólo $800.00 MXN, posteriormente, las sesiones únicamente cuestan $500.00 MXN.

💳 Aceptamos todas la tarjetas.

📍Dirección: Dalias #1 jardines de Atizapán, atizapan de Zaragoza. Estado de México. 
https://maps.app.goo.gl/J7ftBatej6cNt5hQ7

⭐ ¿Quiéres agendar una cita?  
⭐ ¡Da click en el botón de aquí abajo! ⬇`;

  const data = JSON.stringify(
    {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: message
      },
        action: {
          buttons: [
            {
              type: "reply",
              reply: {
                id: "001",
                title: "🔥 ¡Agenda tu cita! 🔥",
              }
            }
          ]
        }
    }
  });
  return data;
}


function Terapeutas(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    type: "interactive",
    interactive: {
      type: "list",
      body: {
        text: "Elige al terapeuta con quien te gustaría agendar tu cita.",
      },
      action: {
        button: "Terapeutas",
        sections: [
          {
            rows: [
              {
                id: "0",
                title: "Charly",
                description: "",
              },
              {
                id: "1",
                title: "Eduardo",
                description: "",
              },
              {
                id: "2",
                title: "Leopoldo",
                description: "",
              }
            ]
          }
        ]
      }
    }
  });
  return data;
}


function Horarios(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    type: "interactive",
    interactive: {
      type: "list",
      body: {
        text: "Horarios disponibles.",
      },
      action: {
        button: "Elige Horario.",
        sections: [
          {
            rows: [
              {
                id: "0",
                title: "8:00 - 9:30",
                description: "",
              },
              {
                id: "1",
                title: "9:45 - 11:15",
                description: "",
              },
              {
                id: "2",
                title: "11:30 - 13:00",
                description: "",
              }
            ]
          }
        ]
      }
    }
  });
  return data;
}

function Confirm(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    text: {
      body: "¡Cita confirmada!",
    },
    type: "text",
  });
  return data;
}


module.exports = {
  Greeting,
  Terapeutas,
  Horarios,
  Confirm
}