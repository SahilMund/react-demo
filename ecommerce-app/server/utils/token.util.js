import jwt from "jsonwebtoken";

export const generateToken = (payload = {}, expiresIn = "2d") => {
  if (Object.keys(payload).length === 0)
    throw new Error("Payload object can't be empty");

  var token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: expiresIn, // after 2 days this will be expired.
  });
  return token;
};

export const veriyToken = (token) => {
  var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  return decoded
};
