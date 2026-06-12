import { Router } from "express";
import { createShortUrl, redirectUrl } from "../controllers/url.controllers.js";

const router = Router();

router.post("/shorten", createShortUrl);
router.get("/:shortCode", redirectUrl);

export default router;