import { veriyToken } from "../utils/token.util.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.auth_token_cookie;
    // const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .json({ message: "No token Provided", shouldRedirectLogin: true });
    }

    var decoded = veriyToken(token);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export default authMiddleware;
