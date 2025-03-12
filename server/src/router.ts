import express from "express";
import {
  getAllCategories,
  getCategoryById,
} from "./modules/category/categoryActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

// Define program-related routes
import programActions from "./modules/program/programActions";

router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);

/* ************************************************************************* */

// Declaration of a "Welcome" route

import sayActions from "./modules/say/sayAction";

router.get("/", sayActions.sayWelcome);

/* ************************************************************************* */

// Route pour obtenir toutes les catégories

// Route pour obtenir toutes les catégories (browse)
router.get("/api/categories", (req, res) => {
  const categories = getAllCategories();
  res.json(categories);
});

// Route pour obtenir une catégorie par son ID (read)
router.get("/api/categories/:id", (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const category = getCategoryById(id);

  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
});

export default router;
