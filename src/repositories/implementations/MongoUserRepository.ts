import { IQuestionsAndAnswersRepository as IUserRepository } from "../IUserRepository";
import UserModel from "../models/UserModel";

export default class MongoCategoryRepository implements IUserRepository {
  async find(obj: any) {
    const user = await UserModel.find(obj);
    return user;
  }

  async save(qa: any): Promise<any> {
    const newUser = await UserModel.create(qa);
    return newUser.toJSON();
  }
}
