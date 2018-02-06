import {Component, OnInit} from '@angular/core';
import {FacebookService, InitParams, LoginResponse} from 'ngx-facebook';
import {UserService} from './services/user.service';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AppComponent';
  public user: User;

  constructor(private fb: FacebookService, private _userService: UserService) {
    this.user = new User({name: '', _username: '', email: ''});
    const initParams: InitParams = {
      appId: '1541935332542083',
      xfbml: true,
      version: 'v2.11'
    };
    fb.init(initParams);
  }

  getNewRandomUser() {
    this._userService.getUser().subscribe((user: User) => {
      this.user = new User(user);
    });
  }

  ngOnInit() {
    this.getNewRandomUser();
  }

  loginWithFb(): void {
    this.fb.login()
      .then((response: LoginResponse) => {
        console.log('Logged in', response);
        this.getFacebookData(response);
      })
      .catch(e => console.error('Error logging in'));
  }

  logout(): void {
    this.fb.logout().then(() => console.log('Logged out!'));
  }

  getFacebookData(response): void {
    // console.log('data', response);
    this.fb.api('/me?fields=email,name,gender,first_name')
      .then((res: any) => console.log(res))
      .catch(e => console.log(e));
  }
}
