import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { registerSchema } from "../schemas/auth.schema";
import { register } from "../controllers/auth.controller";

const router = Router();

router.post("/register", validate(registerSchema), register);

export default router;
