import { IQuestionsAndAnswersRepository } from "../IQuestionsAndAnswersRepository";
import QuestionsAndAnswers from "../../entities/QuestionsAndAnswers";
import QuestionsAndAnswersModel from "../models/QuestionsAndAnswersModel";

export default class MongoCategoryRepository
  implements IQuestionsAndAnswersRepository {
  async getAll() {
    const allQuestionAndAnswers = await QuestionsAndAnswersModel.find({});
    return allQuestionAndAnswers;
  }

  async getOne(id: string): Promise<any> {
    const findQuestionAndAnswer = await QuestionsAndAnswersModel.findOne({
      _id: id,
    });
    return findQuestionAndAnswer;
  }

  async save(qa: any): Promise<any> {
    const newQuestionAndAnswer = await QuestionsAndAnswersModel.create(qa);
    return newQuestionAndAnswer.toJSON();
  }

  async update(id: string, params: any): Promise<any> {
    const updatedQuestionAndAnswer = await QuestionsAndAnswersModel.findOneAndUpdate(
      { _id: id },
      {
        $set: params,
      }
    );
    return updatedQuestionAndAnswer.toJSON();
  }
}
