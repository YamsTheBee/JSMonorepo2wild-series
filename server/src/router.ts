import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";
// Declaration of a "Welcome" route

import sayActions from "./module/sayActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */
// Declaration of a "Welcome" route

import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to Wild Series !");
};
router.get("/", sayWelcome);

/* ************************************************************************* */
// Define program-related routes
import programActions from "./modules/program/programActions";

router.get("/api/programs", programActions.browse);

/* ************************************************************************* */

export default router;
