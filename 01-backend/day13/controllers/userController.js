// In-memory data
let users = [
  { id: 1, name: "Lakshit" },
  { id: 2, name: "Rahul" }
];

// GET
const getUsers = (req, res) => {
  res.json(users);
};

// POST
const addUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

// PUT
const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name;
  res.json(user);
};

// DELETE
const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.json({ message: "User deleted" });
};

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser
};
