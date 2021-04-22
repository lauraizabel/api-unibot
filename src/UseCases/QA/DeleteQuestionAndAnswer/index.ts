import MongoQuestionsAndAnswersRepository from "../../../repositories/implementations/MongoQuestionsAndAnswersRepository";
import DeleteQuestionAndAnswerController from "./DeleteQuestionAndAnswerController";
import DeleteQuestionAndAnswerUseCase from "./DeleteQuestionAndAnswerUseCase";

const mongoQuestionsAndAnswersRepository = new MongoQuestionsAndAnswersRepository();

const deleteQuestionAndAnswerUseCase = new DeleteQuestionAndAnswerUseCase(
  mongoQuestionsAndAnswersRepository
);

const deleteQuestionAndAnswerController = new DeleteQuestionAndAnswerController(
  deleteQuestionAndAnswerUseCase
);

export default deleteQuestionAndAnswerController;
