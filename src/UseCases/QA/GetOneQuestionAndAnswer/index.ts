import MongoQuestionsAndAnswersRepository from "../../../repositories/implementations/MongoQuestionsAndAnswersRepository";
import GetOneQuestionAndAnswerController from "./GetOneQuestionAndAnswerController";
import GetOneQuestionAndAnswerUseCase from "./GetOneQuestionAndAnswerUseCase";

const mongoQuestionsAndAnswersRepository = new MongoQuestionsAndAnswersRepository();

const getOneQuestionAndAnswerUseCase = new GetOneQuestionAndAnswerUseCase(
  mongoQuestionsAndAnswersRepository
);

const getOneQuestionAndAnswerController = new GetOneQuestionAndAnswerController(
  getOneQuestionAndAnswerUseCase
);

export default getOneQuestionAndAnswerController;
