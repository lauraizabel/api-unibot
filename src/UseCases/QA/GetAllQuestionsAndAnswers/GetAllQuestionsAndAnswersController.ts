import { Request, Response } from "express";

import GetAllQuestionsAndAnswersUseCase from "./GetAllQuestionsAndAnswersUseCase";

export default class GetAllQuestionsAndAnswersController {
  constructor(
    private getAllQuestionsAndAnswersUseCase: GetAllQuestionsAndAnswersUseCase
  ) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const allQuestionsAndAnswers = await this.getAllQuestionsAndAnswersUseCase.execute();
      return res.status(200).json(allQuestionsAndAnswers);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
