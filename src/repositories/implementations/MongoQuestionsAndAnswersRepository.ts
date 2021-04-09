import { IQuestionsAndAnswersRepository } from "../IQuestionsAndAnswersRepository";
import QuestionsAndAnswers from "../../entities/QuestionsAndAnswers";
import QuestionsAndAnswersModel from "../models/QuestionsAndAnswersModel";

export default class MongoCategoryRepository
  implements IQuestionsAndAnswersRepository {
  async getAll() {
    const allQuestionAndAnswers = await QuestionsAndAnswersModel.find({});
    console.log(allQuestionAndAnswers);
    return allQuestionAndAnswers;
  }

  async save(qa: any): Promise<any> {
    const newQuestionAndAnswer = await QuestionsAndAnswersModel.create(qa);
    return newQuestionAndAnswer.toJSON();
  }
}
