const { ObjectID } = require("mongodb");
const { collection } = require("./database");

async function checkAndInsertUser(user: string) {
  return await collection("Users").insertOne(user);
}

exports.checkAndInsertUser = checkAndInsertUser;
