import express from "express";
import {
  GET_ALL_FLOWERS,
  POST_CREATE_FLOWER,
  GET_FLOWER_BY_ID,
  DELETE_FLOWER_BY_ID,
  UPDATE_FLOWER_BY_ID,
} from "../controllers/flower.js";
const router = express.Router();

router.get("/flowers", GET_ALL_FLOWERS);
router.get("/flowers/:id", GET_FLOWER_BY_ID);
router.post("/flowers", POST_CREATE_FLOWER);
router.put("/flowers/:id", UPDATE_FLOWER_BY_ID);
router.delete("/flowers/:id", DELETE_FLOWER_BY_ID);

export default router;
