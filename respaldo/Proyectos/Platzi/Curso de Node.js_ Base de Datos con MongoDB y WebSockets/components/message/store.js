// const list = [];
const Model = require("./model");

console.log("[db] Conectada con exito");
let addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
};

let getMessage = (userId) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (userId !== null) {
      filter = { user: userId };
    }
    const messages = Model.find(filter)
      .populate("user")
      .exec((err, populated) => {
        if (err) {
          reject(err);
          return false;
        }
        console.log({store:populated});
        resolve(populated);
      });
  });
};
const updateText = async (id, message) => {
  try {
    const foundMessage = await Model.findOne({ _id: id });
    foundMessage.message = message;

    const newMessage = await foundMessage.save();
    return newMessage;
  } catch (error) {
    return new Error(error.message);
  }
};
const removeMessage = (id) => {
  return Model.deleteOne({ _id: id });
};

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage,
  //get
  //update
  //delete
};
