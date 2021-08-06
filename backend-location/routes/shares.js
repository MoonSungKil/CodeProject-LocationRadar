import express from "express";

import {
  createShare,
  getShares,
  deleteAll,
} from "../controllers/shareControllers.js";

const router = express.Router();

router.post("/", createShare);
router.get("/", getShares);
router.delete("/", deleteAll);

export default router;
