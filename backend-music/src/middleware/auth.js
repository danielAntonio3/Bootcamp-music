const jwt = require('jsonwebtoken');
const { SECRET } = require('./../config');

function authValidation(req, res, next) {
  req.cookies;
  if (req.cookies) {
    const token = req.cookies.token;
    if (token) {
      try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        return next();
      } catch ({ name, message }) {
        return res.status(403).json({
          error: true,
          message,
          type: name,
        });
      }
    }
  }
  return res.status(403).json({
    error: true,
    message: 'Insufficient permissions',
  });
}

const acceptRoles = (...roles) => {
  return (req = request, res = response, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(401).json({
        msg: 'Insufficient permissions',
      });
    }
    next();
  };
};

module.exports = { acceptRoles, authValidation };
