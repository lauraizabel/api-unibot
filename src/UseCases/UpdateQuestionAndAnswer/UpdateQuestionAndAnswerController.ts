import { Request, Response } from "express";
import CreateQuestionAndAnswerUseCase from "./UpdateQuestionAndAnswerUseCase";

export default class CreateQuestionAndAnswerController {
  constructor(
    private createQuestionAndAnswerUseCase: CreateQuestionAndAnswerUseCase
  ) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body, params } = req;
    const { questions, answer } = body;
    const { id } = params;
    try {
      await this.createQuestionAndAnswerUseCase.execute(questions, answer, id);
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
