// const list = [];
const Model = require("./model");

let addUser = (user) => {
  const myUser = new Model(user);
  return myUser.save();
};

let listUsers = async (filterName) => {
  let filter = {};
  if(filterName!==null){
      filter= {'user':filterName};
  }
const myUser = await Model.find(filter);
return myUser;
};
module.exports = {
  add: addUser,
  list: listUsers,
};
