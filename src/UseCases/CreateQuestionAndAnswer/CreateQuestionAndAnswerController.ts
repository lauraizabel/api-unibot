import { Response } from "express";
import CreateQuestionAndAnswerUseCase from "./CreateQuestionAndAnswerUseCase";

export default class CreateQuestionAndAnswerController {
  constructor(
    private createQuestionAndAnswerUseCase: CreateQuestionAndAnswerUseCase
  ) {}

  handle = async (req: any, res: Response): Promise<Response> => {
    const { body } = req;
    const { questions, answer } = body;

    try {
      await this.createQuestionAndAnswerUseCase.execute(questions, answer);
      return res.sendStatus(201);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
