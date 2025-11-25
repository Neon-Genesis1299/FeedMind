import { Router } from "express";
import healthRouter from "./api/v1/health.js";

const router = Router();

router.use('/health',healthRouter);

export default router;