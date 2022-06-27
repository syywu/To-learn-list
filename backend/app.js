import express from "express";
import cors from "cors";
import logger from "morgan";
import router from "./routes/user.js";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use("/user", router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
