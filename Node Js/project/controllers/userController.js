import User from "../data/users.js";


export function getUsers(req, res) {
  res.status(200).json(User);
}


export async function createUser(req, res) {
  try {
    const userdata = new User(req.body);

    await userdata.save();

    res.status(201).json(userdata);
  } catch (error) {
   console.log(error);
   
    }
  }