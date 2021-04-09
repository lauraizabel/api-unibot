import { IQuestionsAndAnswersRepository } from "../../repositories/IQuestionsAndAnswersRepository";
import QuestionsAndAnswers from "../../entities/QuestionsAndAnswers";

export default class CreateQuestionAndAnswerUseCase {
  constructor(
    private questionsAndAnswersRepository: IQuestionsAndAnswersRepository
  ) {}

  execute = async (questions: string[], answer: string[]): Promise<void> => {
    if (!Array.isArray(questions) && !Array.isArray(answer)) {
      throw new Error(
        "CreateQuestionAndAnswerUseCase: invalid questions or answer."
      );
    }

    const newQA = new QuestionsAndAnswers({
      a: answer,
      q: questions,
    });

    await this.questionsAndAnswersRepository.save(newQA);

    return;
  };
}
