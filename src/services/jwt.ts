import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

export const sign = (payload) =>
  jwt.sign(payload, secret, { expiresIn: 86400 });

export const decode = (token) => jwt.verify(token, secret);
