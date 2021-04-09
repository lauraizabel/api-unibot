import { Router } from "express";

import createQuestionAndAnswerController from "./UseCases/CreateQuestionAndAnswer";
import getAllQuestionsAndAnswersController from "./UseCases/GetAllQuestionsAndAnswers";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Hi :)." }));

router.post("/questions", createQuestionAndAnswerController.handle);

router.get("/questions", getAllQuestionsAndAnswersController.handle);

export default router;
