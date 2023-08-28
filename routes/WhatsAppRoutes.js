const express = require("express");
const router = express.Router();
const whatsappController = require("../controllers/WhatsAppController");

router.get("/", whatsappController.VerifyToken);
router.post("/", whatsappController.ReceivedMessage);

module.exports = router;
