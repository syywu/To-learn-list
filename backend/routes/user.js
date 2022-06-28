import express from "express";
const router = express.Router();

// isAuthenticated
router.get("/", (req, res) => {
  res.render({ isAuthenticated: req.oidc.isAuthenticated() });
});

// get user's personal list
router.get("/:id", async (req, res) => {});

// allow user to post

// allow user to delete

export default router;
