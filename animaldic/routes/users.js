import express from "express";
const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  res.send("respond with a resource");
});
router.get("/join", async (req, res) => {
  res.render("users/join");
});
router.get("/find", async (req, res) => {
  res.render("users/find");
});
export default router;
