import User from "../models/user.model.js";

export const getUserInfo = async (req, res) => {
  try {
    res.status(200).json({ message: "User info!!", user: req.user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
