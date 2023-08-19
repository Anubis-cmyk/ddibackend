const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Item = new Schema(
  {
    itemId: { type: String },
    itemName: { type: String },
    itemPrice: { type: Number },
    itemImage: { type: String },
    itemDescription: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", Item);
