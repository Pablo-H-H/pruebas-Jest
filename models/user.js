const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  age: { type: Number, required: true },
});

// Metodo regresa si un usuario es adulto
userSchema.methods.isAdult = function () {
  return this.age >= 18;
};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
