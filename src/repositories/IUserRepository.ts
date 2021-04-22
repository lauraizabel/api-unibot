import User from "../entities/User";

export interface IQuestionsAndAnswersRepository {
  find(obj: any): Promise<any>;
  save(QuestionsAndAnswers: User): Promise<User>;
}
