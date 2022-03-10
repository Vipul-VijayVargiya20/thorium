const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const createUser = async function (req, res) {
try{
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAttribute);
  res.status(201).send({msg: savedData});
} 
catch(err) {
  console.log("This is an error: ", err.message)
  res.status(500).send({msg:"Error", error: err.message})
}
}
const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });

  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not correct",
    });
  let token = jwt.sign(
    {userId: user._id.toString(),
      batch: "thorium",
      organisation: "vipul",
    },
    "vipul-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
}
catch (err) {
  console.log("This is an error: " , err.message)
  res.status(500).send({msg:"Error",error: err.message})
}
};



const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);

  if (!userDetails) {
    return res.send({ status: false, msg: "No such user exists" });
  }
  res.send({ status: true, data: userDetails });
};



const updateUser = async function (req, res) {
try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
 if (!user) {
    return res.send("No such user exists");
  }
 let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: userData }, { new: true });
  res.send({ status: "updatedUser", data: updatedUser });
}
catch (err) {
  console.log("This is an error:", err.message)
  res.status(500).send({ msg: "Error",err: err.message })
}
}
const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let ChangeUserProperty = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } })
  res.send({ msg: "user deleted Succesfully", ChangeUserProperty })

}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;