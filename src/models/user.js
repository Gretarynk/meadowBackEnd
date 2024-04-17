import mongoose from "mongoose";
// biome-ignore lint/complexity/useArrowFunction: <explanation>
const validateEmail = function (email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };
const userSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true, min: 3 },
  email: { type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],},
  password: { type: String, required: true },
  flowers: { type: Array, required: false },
  
});

export default mongoose.model("User", userSchema);
