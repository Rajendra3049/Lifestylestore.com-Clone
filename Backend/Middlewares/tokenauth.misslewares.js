const jwt = require("jsonwebtoken");
const { SignupModel } = require("../model/signup.model");
require("dotenv").config();

const tokenValidator = async (req, res, next) => {
  const privateKey = process.env.privateKey;
  const token = req.headers.authorization?.split(" ")[1];
  jwt.verify(token, privateKey, async function (err, decoded) {
    // err
    // decoded undefined

    const id = decoded?.id;
    const user = await SignupModel.findOne({ _id: id });
    if (err) {
      res.send({ msg: "You need to log in first" });
    } else {
      next();
    }
  });
};
module.exports = tokenValidator;
