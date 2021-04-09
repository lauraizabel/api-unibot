import { IQuestionsAndAnswersRepository } from "../../repositories/IQuestionsAndAnswersRepository";

export default class GetOneQuestionAndAnswerUseCase {
  constructor(
    private questionsAndAnswersRepository: IQuestionsAndAnswersRepository
  ) {}

  execute = async (id: string): Promise<any> => {
    const questionsAndAnswer = await this.questionsAndAnswersRepository.getOne(
      id
    );

    return questionsAndAnswer;
  };
}
