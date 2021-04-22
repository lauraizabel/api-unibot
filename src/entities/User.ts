export default class User {
  public _id?: string;

  public email: string;

  public password: string;

  constructor(props: User) {
    Object.assign(this, props);
  }
}
