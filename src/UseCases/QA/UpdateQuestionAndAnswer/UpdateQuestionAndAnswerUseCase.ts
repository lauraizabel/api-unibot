import { IQuestionsAndAnswersRepository } from "../../../repositories/IQuestionsAndAnswersRepository";
import QuestionsAndAnswers from "../../../entities/QuestionsAndAnswers";

export default class CreateQuestionAndAnswerUseCase {
  constructor(
    private questionsAndAnswersRepository: IQuestionsAndAnswersRepository
  ) {}

  execute = async (
    questions: string[],
    answer: string[],
    id: string,
    topic: string
  ): Promise<void> => {
    const oldQA = await this.questionsAndAnswersRepository.getOne(id);

    if (!oldQA) {
      throw new Error("CreateQuestionAndAnswerUseCase: invalid id.");
    }

    if (!Array.isArray(questions) && !Array.isArray(answer)) {
      throw new Error(
        "CreateQuestionAndAnswerUseCase: invalid questions or answer."
      );
    }

    const newQA = new QuestionsAndAnswers({
      a: answer ?? oldQA.a,
      q: questions ?? oldQA.q,
      topic: topic ?? oldQA.topic ?? "",
    });

    await this.questionsAndAnswersRepository.update(id, { ...newQA });

    return;
  };
}
