const register = (req, res) => {
  res.send("Login successful");
};

const login = (req, res) => {
  res.send("Registration successful");
};

module.exports = {
  register,
  login,
};
