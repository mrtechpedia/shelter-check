const mongoose = require("mongoose");

const { Schema } = mongoose;

const professionalSchema = new Schema({
  professionalName: String,
  email: String,
  mobile: String,
  occupation: String,
});

mongoose.model("professionals", professionalSchema);
