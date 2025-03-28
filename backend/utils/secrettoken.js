require("dotenv").config({ path: __dirname + "/../.env"});
const jwt = require("jsonwebtoken");
// console.log(process.env.TOKEN_KEY)

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};