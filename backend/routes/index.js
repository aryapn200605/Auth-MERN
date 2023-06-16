import express from "express";
import { getUser, Login, Register, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUser);
router.get("/token", refreshToken);
router.post("/users", Register);
router.post("/login", Login);
router.delete("/logout", Logout);

export default router;