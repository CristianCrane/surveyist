module.exports = (req, res, next) => {
  if (!req.user) {
    res.status(401).send({ error: "Authentication required. Please log in." });
  }

  next();
};
