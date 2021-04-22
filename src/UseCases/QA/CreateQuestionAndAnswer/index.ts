import MongoQuestionsAndAnswersRepository from "../../../repositories/implementations/MongoQuestionsAndAnswersRepository";
import CreateQuestionAndAnswerController from "./CreateQuestionAndAnswerController";
import CreateQuestionAndAnswerUseCase from "./CreateQuestionAndAnswerUseCase";

const mongoQuestionsAndAnswersRepository = new MongoQuestionsAndAnswersRepository();

const createQuestionAndAnswerUseCase = new CreateQuestionAndAnswerUseCase(
  mongoQuestionsAndAnswersRepository
);

const createQuestionAndAnswerController = new CreateQuestionAndAnswerController(
  createQuestionAndAnswerUseCase
);

export default createQuestionAndAnswerController;
