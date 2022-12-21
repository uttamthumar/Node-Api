const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();


dotenv.config();
const PORT = 7000;
mongoose.set("strictQuery", true);

try {
  mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true
  });
  console.log("Connected to DB !!");
} catch (e) {
  console.log(e);
  throw e;
}
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

 
app.use(router);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});