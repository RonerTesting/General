const store = require("./store");
const addMessage = (chat,user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageController] No hay usuario o mensaje");
      return reject("los datos son incorrectos");
    }
    const fullMessage = {
      chat:chat,
      user: user,
      message: message,
      date: new Date(),
    };
    store.add(fullMessage);
    resolve(fullMessage);
  });
};
const getMessages = (filterUser) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
};
const updateMessage =  (id, message) => {
  return new Promise(async(resolve, reject) => {
    if (!id || !message) {
      reject("Invalid data");
      return false;
    }
    const result = await store.updateText(id, message);
    if(result instanceof Error)
      reject(result)
    resolve(result)
  });
};

const deleteMessage=(id)=>{
  return new Promise((resolve,reject)=>{
    if(!id){
      reject('Id invalido')
      return false;
    }
    return store.remove(id)
    .then(()=>{
      resolve();
    })
    .catch(e=>{
      reject(e);
    });
  })

}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
