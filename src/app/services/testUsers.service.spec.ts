import {async, TestBed, inject} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import {UsersService} from './testUsers.service';


describe('cal test api and test the data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [UsersService]
    });
  });
  it('should be created UsersService', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));


  it('getUserDetails from https://jsonplaceholder.typicode.com/users', async(inject([UsersService], (userService: UsersService) => {
    userService
      .getUserData()
      .toPromise()
      .then((user) => {
        expect(user).toEqual(jasmine.any(Array));
        expect(user[0]).toEqual(jasmine.objectContaining({
          'id': 1,
          'name': 'Leanne Graham',
          'username': 'Bret',
          'email': 'Sincere@april.biz',
        }));
      }).catch((res) => {
      fail(res.status);
    });
  })), 10000);

  xit('getUserDetails from https://jsonplaceholder.typicode.com/ram', async(inject([UsersService], (userService: UsersService) => {
    userService
      .getUserInfo()
      .toPromise()
      .then((user) => {
        expect(user).toEqual(jasmine.any(Array));
        expect(user[0]).toEqual(jasmine.objectContaining({
          'id': 1,
          'name': 'Leanne Graham',
          'username': 'Bret',
          'email': 'Sincere@april.biz',
        }));
      }).catch((res) => {
      fail(res.status);
    });
  })), 10000);


});
