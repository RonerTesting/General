const db = require("mongoose");

db.Promise = global.Promise;
const connect = async (url) => {
  await db
    .connect(url, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("[Date Base Connect] DB conectada con éxito");
    })
    .catch((err) => {
      console.error(
        "[Date Base Connect] Error al conectar a la base de datoss" + err
      );
      return new Error(err.message);
    });
};

module.exports = connect;
