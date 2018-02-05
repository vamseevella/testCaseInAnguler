import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FacebookModule} from 'ngx-facebook';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './services/intersepter.service';


import {AppComponent} from './app.component';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FacebookModule.forRoot()
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
