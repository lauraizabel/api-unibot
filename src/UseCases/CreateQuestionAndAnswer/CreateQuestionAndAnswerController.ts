import { Request, Response } from "express";
import CreateQuestionAndAnswerUseCase from "./CreateQuestionAndAnswerUseCase";

export default class CreateQuestionAndAnswerController {
  constructor(
    private createQuestionAndAnswerUseCase: CreateQuestionAndAnswerUseCase
  ) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body } = req;
    const { questions, answer, topic } = body;

    try {
      await this.createQuestionAndAnswerUseCase.execute(
        questions,
        answer,
        topic
      );
      return res.sendStatus(201);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
