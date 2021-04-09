import { Request, Response } from "express";
import DeleteQuestionAndAnswerUseCase from "./DeleteQuestionAndAnswerUseCase";

export default class DeleteQuestionAndAnswerController {
  constructor(
    private deleteQuestionAndAnswerUseCase: DeleteQuestionAndAnswerUseCase
  ) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    try {
      await this.deleteQuestionAndAnswerUseCase.execute(id);
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
