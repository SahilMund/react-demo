import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const register = async (req, res) => {
  /*
 1. need to get the email, password, name from the FE
 2. need to check if the required infos are missing if so throw an error
 3. verify if the user is already exists or not, if so throw an error
 4. if not exists, insert it into the db but make sure to hash the pwd
    */
  try {
    console.log(req.body);
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400) //bad request/payload
        .json({ message: "Required infos are missing" });
    }

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // new user
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      name,
    });

    res
      .status(201)
      .json({ message: "User registered successfully!!", data: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    console.log(req.body);
    res.status(500).json({ message: "User loggedIn successfully!!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
