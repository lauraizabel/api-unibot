import { Request, Response } from "express";

import GetOneQuestionAndAnswerUseCase from "./GetOneQuestionAndAnswerUseCase";

export default class GetOneQuestionAndAnswerController {
  constructor(
    private getOneQuestionAndAnswerUseCase: GetOneQuestionAndAnswerUseCase
  ) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const allQuestionsAndAnswers = await this.getOneQuestionAndAnswerUseCase.execute(
        id
      );
      return res.status(200).json(allQuestionsAndAnswers);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
