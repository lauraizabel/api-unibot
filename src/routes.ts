import { Router } from "express";

import createQuestionAndAnswerController from "./UseCases/CreateQuestionAndAnswer";
import getAllQuestionsAndAnswersController from "./UseCases/GetAllQuestionsAndAnswers";
import updateQuestionAndAnswerController from "./UseCases/UpdateQuestionAndAnswer";
import getOneQuestionAndAnswerController from "./UseCases/GetOneQuestionAndAnswer";
import deleteQuestionAndAnswerController from "./UseCases/DeleteQuestionAndAnswer";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Hi :)." }));

router.post("/questions", createQuestionAndAnswerController.handle);

router.get("/questions", getAllQuestionsAndAnswersController.handle);

router.put("/questions/:id", updateQuestionAndAnswerController.handle);

router.get("/questions/:id", getOneQuestionAndAnswerController.handle);

router.delete("/questions/:id", deleteQuestionAndAnswerController.handle);

export default router;
