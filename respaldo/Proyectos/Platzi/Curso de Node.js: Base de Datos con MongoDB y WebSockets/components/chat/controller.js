const store = require("./store");
const addChat = (users) => {
  return new Promise((resolve, reject) => {
    if (!users||!Array.isArray(users)) {
      console.error("[userController] No hay usuario");
      reject("Invalid UserList");
    }
    const chat = {
    users: users,
    };
    resolve(store.add(chat));
  });
};
const listChats = (userId) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(userId));
  });
};

module.exports = {
  addChat,
  listChats,
};
