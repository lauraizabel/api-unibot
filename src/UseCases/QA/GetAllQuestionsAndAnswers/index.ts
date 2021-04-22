import MongoQuestionsAndAnswersRepository from "../../../repositories/implementations/MongoQuestionsAndAnswersRepository";
import GetAllQuestionsAndAnswersController from "./GetAllQuestionsAndAnswersController";
import GetAllQuestionsAndAnswersUseCase from "./GetAllQuestionsAndAnswersUseCase";

const mongoQuestionsAndAnswersRepository = new MongoQuestionsAndAnswersRepository();

const getAllQuestionsAndAnswersUseCase = new GetAllQuestionsAndAnswersUseCase(
  mongoQuestionsAndAnswersRepository
);

const getAllQuestionsAndAnswersController = new GetAllQuestionsAndAnswersController(
  getAllQuestionsAndAnswersUseCase
);

export default getAllQuestionsAndAnswersController;
