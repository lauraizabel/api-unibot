import { Request, Response } from "express";
import UpdateQuestionAndAnswerUseCase from "./UpdateQuestionAndAnswerUseCase";

export default class UpdateQuestionAndAnswerController {
  constructor(
    private updateQuestionAndAnswerUseCase: UpdateQuestionAndAnswerUseCase
  ) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body, params } = req;
    const { questions, answer } = body;
    const { id } = params;
    try {
      await this.updateQuestionAndAnswerUseCase.execute(questions, answer, id);
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
