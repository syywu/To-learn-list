import express from "express";
import cors from "cors";
import logger from "morgan";
import router from "./routes/user.js";
import { auth } from "express-openid-connect";
import pkg from "express-openid-connect";
const { requiresAuth } = pkg;

const PORT = process.env.PORT;
const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.secret,
  baseURL: process.env.baseURL,
  clientID: process.env.clientID,
  issuerBaseURL: process.env.issuerBaseURL,
};

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", router);
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// requiresAuth middleware for routes that require authentication- check for a valid user session
app.get("/user", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
