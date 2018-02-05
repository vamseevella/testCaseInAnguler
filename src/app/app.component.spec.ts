import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FacebookService} from 'ngx-facebook';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {UserService} from './services/user.service';


xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        FacebookService,
        HttpClient,
        HttpHandler,
        UserService
      ]
    }).compileComponents();
  }));
  it('should create the app and app title should be AppComponent', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    expect(app.title).toEqual('AppComponent');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to AppComponent!');
  }));
});
