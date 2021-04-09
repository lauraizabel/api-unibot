import { IQuestionsAndAnswersRepository } from "../../repositories/IQuestionsAndAnswersRepository";

export default class GetAllQuestionsAndAnswersUseCase {
  constructor(
    private questionsAndAnswersRepository: IQuestionsAndAnswersRepository
  ) {}

  execute = async (): Promise<void> => {
    const questionsAndAnswers = await this.questionsAndAnswersRepository.getAll();

    const formattedQuestionsAndAnswers = questionsAndAnswers.map(
      ({ q, a }) => ({ q, a })
    );

    return formattedQuestionsAndAnswers;
  };
}
