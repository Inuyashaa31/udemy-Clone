import express from "express";
import { getCourse } from "../controller/courses.controller.js";

const router = express.Router();

router.get("/", getCourse);

export default router;