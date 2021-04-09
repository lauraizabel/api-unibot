import QuestionsAndAnswers from "../entities/QuestionsAndAnswers";

export interface IQuestionsAndAnswersRepository {
  getAll();
  // findById(id: string): Promise<QuestionsAndAnswers>;
  save(QuestionsAndAnswers: QuestionsAndAnswers): Promise<QuestionsAndAnswers>;
  // update(id: string, params: any): Promise<QuestionsAndAnswers>;
}
