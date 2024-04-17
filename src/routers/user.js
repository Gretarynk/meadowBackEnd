import express from "express";
import { SIGN_IN } from "../controllers/user.js";
const router = express.Router();

router.post("/users1",SIGN_IN);


export default router
