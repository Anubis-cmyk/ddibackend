const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Message = new Schema(
  { 
    email: { type: String },
    contact: { type: Number },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", Message);
