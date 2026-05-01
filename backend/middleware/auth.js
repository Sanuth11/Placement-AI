const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/jwtConfig");

module.exports = function (req, res, next) {

  const authHeader = req.get("Authorization") || "";
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {

    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;

    next();

  } catch (error) {

    res.status(401).json({
      message: "Invalid token"
    });

  }

};