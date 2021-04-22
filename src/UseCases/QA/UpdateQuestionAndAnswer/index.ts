import MongoQuestionsAndAnswersRepository from "../../../repositories/implementations/MongoQuestionsAndAnswersRepository";
import UpdateQuestionAndAnswerController from "./UpdateQuestionAndAnswerController";
import UpdateQuestionAndAnswerUseCase from "./UpdateQuestionAndAnswerUseCase";

const mongoQuestionsAndAnswersRepository = new MongoQuestionsAndAnswersRepository();

const updateQuestionAndAnswerUseCase = new UpdateQuestionAndAnswerUseCase(
  mongoQuestionsAndAnswersRepository
);

const updateQuestionAndAnswerController = new UpdateQuestionAndAnswerController(
  updateQuestionAndAnswerUseCase
);

export default updateQuestionAndAnswerController;
