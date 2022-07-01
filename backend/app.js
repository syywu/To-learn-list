import express from "express";
import cors from "cors";
import logger from "morgan";
import router from "./routes/user.js";
import { auth, requiredScopes } from "express-oauth2-jwt-bearer";
import { postSubject } from "./models/user.js";
const checkScopes = requiredScopes("read:messages");
const PORT = process.env.PORT;
const app = express();

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.secret,
//   baseURL: process.env.baseURL,
//   clientID: process.env.clientID,
//   issuerBaseURL: process.env.issuerBaseURL,
// };

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.issuerBaseURL,
});

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", router);
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(openidAuth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  // res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
  res.send("root route");
});

// requiresAuth middleware for routes that require authentication- check for a valid user session
app.get("/user", (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.get("/user", checkJwt, function (req, res) {
  res.json({
    payload: await getUser()
  });
});

app.post("/user", checkJwt, function (req, res) {
  res.json({success: true, payload: await postSubject(req.body)});
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
