import { IQuestionsAndAnswersRepository } from "../../../repositories/IQuestionsAndAnswersRepository";

export default class DeleteQuestionAndAnswerUseCase {
  constructor(
    private questionsAndAnswersRepository: IQuestionsAndAnswersRepository
  ) {}

  execute = async (id: string): Promise<void> => {
    const oldQA = await this.questionsAndAnswersRepository.getOne(id);

    if (!oldQA) {
      throw new Error("CreateQuestionAndAnswerUseCase: invalid id.");
    }

    await this.questionsAndAnswersRepository.delete(id);

    return;
  };
}
