const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.body.user);
  const filterUser = req.body.user||null;
  controller
    .listUsers(filterUser)
    .then((userList) => {
      console.log(userList);
      response.success(req, res, userList, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
});

router.post("/", (req, res) => {
  console.log(req.body.user);
  controller
    .addUser(req.body.name)
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
module.exports = router;
