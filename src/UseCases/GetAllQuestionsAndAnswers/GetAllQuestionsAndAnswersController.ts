import { Response } from "express";
import CreateQuestionAndAnswerUseCase from "./GetAllQuestionsAndAnswersUseCase";

export default class GetAllQuestionsAndAnswersController {
  constructor(
    private createQuestionAndAnswerUseCase: CreateQuestionAndAnswerUseCase
  ) {}

  handle = async (req: any, res: Response): Promise<Response> => {
    try {
      const allQuestionsAndAnswers = await this.createQuestionAndAnswerUseCase.execute();
      return res.status(200).json(allQuestionsAndAnswers);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
