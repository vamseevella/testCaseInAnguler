export class User {

  private _name: string;
  private _username: string;
  private _email: string;

  constructor(rawUser) {
    this._name = rawUser.name;
    this._username = rawUser.username;
    this._email = rawUser.email;
  }

  public getName(): string {
    return this._name;
  }

  public getUserName(): string {
    return this._username;
  }

  public getEmail(): string {
    return this._email;
  }
}
