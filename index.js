const express = require("express");

const app = express();
app.use(express.json());

//routes
const whatsappRoutes = require("./routes/WhatsAppRoutes.js");
app.use("/", whatsappRoutes);

const listen_port = process.env.PORT || 3900;
app.listen(listen_port, function () {
  console.log("app running");
});
