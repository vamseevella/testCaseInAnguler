import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AppComponent';
  public user: User;

  constructor(private _userService: UserService) {
    this.user = new User({name: '', _username: '', email: ''});
  }

  getNewRandomUser() {
    this._userService.getUser().subscribe((user: User) => {
      this.user = new User(user);
    });
  }

  ngOnInit() {
    this.getNewRandomUser();
  }
}
