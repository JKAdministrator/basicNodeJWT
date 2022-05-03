const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors/index");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new UnauthenticatedError("No token provided");
  const token = authHeader.split(" ");
  try {
    const decoded = jwt.verify(token[1], process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (e) {
    throw new UnauthenticatedError("Not Authorized to acces this route");
  }
};
module.exports = authenticationMiddleware;
