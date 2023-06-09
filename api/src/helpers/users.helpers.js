import Users from "../models/users.js";
import { usersGenerate } from "../generadorDeDatos.js";
import Assist from "../models/assist.js";

export function createUser({ name, email, dni }) {
  // console.log("esto es hasgoogle",hashgoogle)
  let creatingUser;
  if (!name) {
    let verifyUserExist = Users.findAll();
    if (!verifyUserExist.length) {
      creatingUser = Users.bulkCreate(usersGenerate);
    }
  } else {
    let userArray = [{ name, email, dni }];
    creatingUser = Users.bulkCreate(userArray);
    return creatingUser;
  }
}

export function findAllUsers() {
  let findUsers = Users.findAll();
  return findUsers;
}

export function userById(code) {
  let findUser = Users.findOne({ 
    where: { code },
    include: [{
      model: Assist,
    }]
   });
  return findUser
}
