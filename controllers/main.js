const { BadRequest } = require("../errors");
const jwt = require("jsonwebtoken");

/**
 *
 * @param {*} req
 * @param {*} res
 * Return a msg:String and a token:string
 */
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    throw new BadRequest("Please provide a username and/or password");
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "ser created", token });
};

/**
 *
 * @param {*} req
 * @param {*} res
 * Returns a msg:String with the username & a secret:String (a message with random number)
 */
const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100); //0-99

  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `Here is your lucky number ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
