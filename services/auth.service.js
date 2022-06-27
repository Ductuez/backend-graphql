import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { tokenSecret } from "../configs";
// retrieve env vars
dotenv.config();
class Auth {
  constructor() {}

  static async hashPassword(pwd) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(pwd, salt);
  }

  static async matchPasswords(requestPwd, userPwd) {
    return bcrypt.compare(requestPwd, userPwd);
  }

  static generateJwt({ username, email, userId }) {
    return jwt.sign({ userId, email, username }, tokenSecret, {
      expiresIn: "30 days",
    });
  }

  static getJwtPayload(token) {
    return jwt.verify(token, tokenSecret);
  }

  static getUserId({ req = {}, authToken = "" }) {
    if (req.headers) {
      const authHeader = req?.headers?.authorization;
      if (authHeader) {
        const token = authHeader.replace("Bearer ", "");
        if (!token) {
          return null;
        }
        const { userId } = this.getJwtPayload(token);
        return userId;
      }
    } else if (authToken) {
      const { userId } = this.getJwtPayload(authToken);
      return userId;
    }

    return null;
  }
}

export default Auth;
