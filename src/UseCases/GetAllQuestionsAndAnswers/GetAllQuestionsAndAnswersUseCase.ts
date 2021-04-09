import { IQuestionsAndAnswersRepository } from "../../repositories/IQuestionsAndAnswersRepository";

export default class GetAllQuestionsAndAnswersUseCase {
  constructor(
    private questionsAndAnswersRepository: IQuestionsAndAnswersRepository
  ) {}

  execute = async (): Promise<void> => {
    const questionsAndAnswers = await this.questionsAndAnswersRepository.getAll();

    const formattedQuestionsAndAnswers = questionsAndAnswers.map(
      ({ q, a, _id }) => ({ q, a, _id })
    );

    return formattedQuestionsAndAnswers;
  };
}
