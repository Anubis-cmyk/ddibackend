const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); 
const Message = require("./message/Message_route"); 
const Item = require("./items/Item_route"); 

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8070;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(
  MONGODB_URI,
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  },
  (error) => {
    if (error) {
      console.log("Database ERROR: ", error.message);
    }
  }
);

mongoose.connection.once("open", () => {
  console.log("Database Synced");
});
 
app.use("/item", Item); 
app.use("/message", Message); 
 
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
