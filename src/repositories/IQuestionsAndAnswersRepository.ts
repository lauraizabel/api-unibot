import QuestionsAndAnswers from "../entities/QuestionsAndAnswers";

export interface IQuestionsAndAnswersRepository {
  getAll();
  getOne(id: string): Promise<QuestionsAndAnswers>;
  delete(id): Promise<void>;
  save(QuestionsAndAnswers: QuestionsAndAnswers): Promise<QuestionsAndAnswers>;
  update(id: string, params: any): Promise<QuestionsAndAnswers>;
}
