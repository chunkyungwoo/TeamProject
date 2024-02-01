import express from "express";
import DB from "../models/index.js";

const router = express.Router();
const FISH = DB.models.tbl_fishs;

router.get("/", async (req, res) => {
  try {
    const rows = await FISH.findAll();
    return res.render("mainhome/fish", { mainhome: rows });
  } catch (error) {
    return res.json(error);
  }
});
router.get("/insert", async (req, res) => {
  const fish_data = await FISH.build();
  return res.render("mainhome/input", { fish: fish_data });
});

router.post("/insert", async (req, res) => {
  const fish_data = req.body;
  try {
    await FISH.create(fish_data);
    return res.redirect("/mainhome");
  } catch (error) {
    return res.json(error);
  }
});
router.get("/:isbn/update", async (req, res) => {
  const isbn = req.params.isbn;
  try {
    const row = await FISH.findByPk(isbn);
    return res.render("mainhome/input", { fish: row });
  } catch (error) {
    return res.json(error);
  }
});
router.post("/:isbn/update", async (req, res) => {
  const fish_data = req.body;
  const isbn = req.params.isbn;
  try {
    await FISH.update(fish_data, { where: { isbn: isbn } });
    return res.redirect(`/mainhome/${isbn}/detail`);
  } catch (error) {
    return res.json(error);
  }
});
router.get("/:isbn/delete", async (req, res) => {
  const isbn = req.params.isbn;
  try {
    await FISH.destroy({ where: { isbn } });
    return res.redirect("/mainhome");
  } catch {
    return res.json(error);
  }
});

export default router;
