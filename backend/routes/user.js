import express from "express";
const router = express.Router();

// get user's personal list
router.get("/:id", async (req, res) => {
  if (req.oidc.user) {
  }
});

// allow user to post

// allow user to delete

export default router;
