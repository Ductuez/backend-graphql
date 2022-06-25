import mongoose from "mongoose";
const { Schema } = mongoose;

const Hobbies = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const UsersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  menu: {
    type: [Hobbies],
  },
});

const Users = mongoose.model("Users", UsersSchema);
module.exports = {
  Users,
};
