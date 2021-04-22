import { Router } from "express";

import createQuestionAndAnswerController from "./UseCases/QA/CreateQuestionAndAnswer";
import getAllQuestionsAndAnswersController from "./UseCases/QA/GetAllQuestionsAndAnswers";
import updateQuestionAndAnswerController from "./UseCases/QA/UpdateQuestionAndAnswer";
import getOneQuestionAndAnswerController from "./UseCases/QA/GetOneQuestionAndAnswer";
import deleteQuestionAndAnswerController from "./UseCases/QA/DeleteQuestionAndAnswer";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Hi :)." }));

router.post("/questions", createQuestionAndAnswerController.handle);

router.get("/questions", getAllQuestionsAndAnswersController.handle);

router.put("/questions/:id", updateQuestionAndAnswerController.handle);

router.get("/questions/:id", getOneQuestionAndAnswerController.handle);

router.delete("/questions/:id", deleteQuestionAndAnswerController.handle);

export default router;
