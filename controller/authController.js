const user = require("../db/models/user");
const SignUp = async (req, res, next) => {
  const body = req.body;
  if(!body){
    res.status(400).json({
      status:'failed',
      message:'Body forgotten'
    })
  }
  if (!["1", "2"].includes(body.userType)) {
    res.status(400).json({
      status: "failed",
      message: "userType not valide",
    });
  }
  const newUser = await user.create({
      userType: body.userType,
      FirstName: body.FirstName,
      LastName: body.LastName,
      Email: body.Email,
      Password: body.Password,
    });
    if (!newUser) {
      res.status(400).json({
        status: "failed",
        message: "failed to created user",
      });
    }
    res.json({
      status: "success",
      message: "created user successfuly",
      data: newUser,
    });
};
module.exports = { SignUp };
