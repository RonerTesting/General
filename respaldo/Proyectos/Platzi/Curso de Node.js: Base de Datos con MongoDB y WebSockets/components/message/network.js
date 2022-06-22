const express = require("express");
const multer= require("multer");

const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

const upload = multer({
  dest:'uploads/',
});

router.get("/", (req, res) => {
  const filterMessages = req.body.user||null;
  console.log({network:filterMessages});
  controller
    .getMessages(filterMessages)
    .then((messageList) => {
      console.log(messageList);
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
});

router.post("/",(req, res) => {
  controller
    .addMessage(req.body.chat,req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      response.error(
        req,
        res,
        "Informacion invalida",
        500,
        "Error en el controlador"
      );
    });
});
router.delete("/:id", (req, res) => {
  controller.deleteMessage(req.params.id)
  .then(()=>{
    response.success(req,res,`Mensaje ${req.params.id} eliminado`,200);
  })
  .catch((e)=>{
    response.error(req,res,'Error interno',500,e);
  });
  
});
router.patch("/:id", (req, res) => {
  // console.log(req.params.id);
  console.log(`Actualizando el mensaje {id:${req.params.id}} a {message:"${req.body.message}"}`);
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error interno", 500, e);
    });
});
module.exports = router;
