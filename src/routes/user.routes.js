import { Router } from "express";
import { resisterUser } from "../controllers/user.controler.js";

const router = Router()
router.route("/register").post(resisterUser)

export default router;