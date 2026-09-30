import User from "../data/users.js";


export function getUsers(req, res) {
  res.status(200).json(User);
}

export async function createUser(req, res) {
  const user = await User.collection.insertOne(req.body);

  res.status(201).json(user);
}