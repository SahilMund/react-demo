import User from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .json({ message: "No token Provided", shouldRedirectLogin: true });
    }

    const user = await User.findOne({ token });

    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export default authMiddleware;
