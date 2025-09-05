const { SignUp } = require("../controller/authController");

const Router = require("express").Router();
Router.route("/signup").post(SignUp);
module.exports = Router;
