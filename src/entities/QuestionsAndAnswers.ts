export default class QuestionsAndAnswers {
  public _id?: string;

  public q: string[];

  public a: string[];

  constructor(props: QuestionsAndAnswers) {
    Object.assign(this, props);
  }
}
