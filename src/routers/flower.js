import express from "express";
import {
  GET_ALL_FLOWERS,
  POST_CREATE_FLOWER,
  GET_FLOWER_BY_ID,
  DELETE_FLOWER_BY_ID,
  UPDATE_FLOWER_BY_ID,
  GET_ALL_USER_FLOWERS,
} from "../controllers/flower.js";
import {auth} from "../middleware/auth.js"
const router = express.Router();

router.get("/flowers",auth, GET_ALL_FLOWERS);
router.get("/flowers/user",auth, GET_ALL_USER_FLOWERS);
router.get("/flowers/:id", GET_FLOWER_BY_ID);
router.post("/flowers",auth, POST_CREATE_FLOWER);
router.put("/flowers/:id", UPDATE_FLOWER_BY_ID);
router.delete("/flowers/:id",auth, DELETE_FLOWER_BY_ID);

export default router;
