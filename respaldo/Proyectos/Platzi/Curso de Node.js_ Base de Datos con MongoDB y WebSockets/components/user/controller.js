const store = require("./store");
const addUser = (name) => {
  return new Promise((resolve, reject) => {
    if (!name) {
      console.error("[userController] No hay usuario");
      reject("Nombre invalido");
    }
    const user = {
    name: name,
    };
    resolve(store.add(user));
  });
};
const listUsers = (filterName) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterName));
  });
};

module.exports = {
  addUser,
  listUsers,
};
