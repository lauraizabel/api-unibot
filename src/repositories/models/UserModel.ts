import mongoose from "mongoose";
import crypto from "crypto";

const UserModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      set: (value) => crypto.createHash("md5").update(value).digest("hex"),
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserModel);

export default User;
