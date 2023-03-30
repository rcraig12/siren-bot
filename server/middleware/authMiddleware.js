const jwt = require('jsonwebtoken');

const SECRET_KEY = 'mysecretkey';

function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send('Unauthorized request');
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(403).send('Invalid token');
  }
}
