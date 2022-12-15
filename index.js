import express from "express";
import  cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/user.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/user", router);

app.listen(PORT, () => console.log("server is running"));
