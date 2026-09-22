import users from "../data/users.js";

export function getUsers(req, res) {
  res.status(200).json(users);
}