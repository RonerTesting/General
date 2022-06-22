const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body.users);
  controller
    .addChat(req.body.users)
    .then((data) => {
      response.success(req, res, data, 201);
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

router.get("/:userId", (req, res) => {
  console.log(req.params.userId);
  const filterChat = req.body.user||null;
  controller
    .listChats(filterChat)
    .then((userChat) => {
      console.log(userChat);
      response.success(req, res, userChat, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
});

module.exports = router;
