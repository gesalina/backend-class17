import mongoose from "mongoose";

const loginCollection = "users";

const loginSchema = new mongoose.Schema({
  user: {
    type: String,
    unique: true,
    required: true,
  },
  password:{
    type: String,
    require: true
  }
});

export const loginModel = mongoose.model(loginCollection, loginSchema);
