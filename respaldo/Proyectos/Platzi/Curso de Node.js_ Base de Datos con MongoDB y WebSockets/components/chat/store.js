// const list = [];
const Model = require("./model");

let addChat = (chat) => {
  const myChat = new Model(chat);
  return myChat.save();
};

let listChats = async (userId) => {
    try {
      let filter = {};
      if (userId !== null) {
        filter = { users: userId };

        return await Model.find(filter).populate("users").exec();
      }
    } catch (error) {
      console.log(error);
    }
};
module.exports = {
  add: addChat,
  list: listChats,
};
