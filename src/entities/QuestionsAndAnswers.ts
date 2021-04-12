export default class QuestionsAndAnswers {
  public _id?: string;

  public q: string[];

  public a: string[];

  public topic: string;

  constructor(props: QuestionsAndAnswers) {
    Object.assign(this, props);
  }
}
