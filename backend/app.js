import express from "express";
import cors from "cors";
import logger from "morgan";
import router from "./routes/user.js";
import { auth } from "express-openid-connect";

const PORT = process.env.PORT;
const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.secret,
  baseURL: "http://localhost:3000",
  clientID: "fkAqVWMqYn79o2tZN0ICVweJmMRem8zp",
  issuerBaseURL: "https://syywu-projects.eu.auth0.com",
};

app.use(cors());
app.use(logger("dev"));
app.use("/user", router);
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
