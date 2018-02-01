import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './../model/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  /**
   * Please note. 'Content-Type' header is set to 'application/json' by default.
   * You can completely remove _headers object in this demo and it will work properly. The only one purpose of it here is to show an example of configuration in a case you need to set your own custom headers.
   */
  private _headers = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  public getUser() {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + this._generateRandom(), this._headers);
  }

  private _generateRandom(): string {
    return (Math.floor(Math.random() * 10) + 1).toString();
  }
}
