import { Router } from "express";

import createQuestionAndAnswerController from "./UseCases/CreateQuestionAndAnswer";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Hi :)." }));

router.post("/questions", createQuestionAndAnswerController.handle);

export default router;
