import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersService {
  private _getURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getUserData(): Observable<{}> {
    return this.httpClient
      .get(this._getURL)
      .map((resp) => resp);
  }

  getUserInfo(): Observable<{}> {
    return this.httpClient
      .get('https://jsonplaceholder.typicode.com/ram')
      .map((resp) => resp);
  }
}
