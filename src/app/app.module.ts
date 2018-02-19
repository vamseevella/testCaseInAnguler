import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FacebookModule} from 'ngx-facebook';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MyInterceptor} from './services/intersepter.service';


import {AppComponent} from './app.component';
import {EagerComponent} from './eager/eager.component';
import {UserService} from './services/user.service';
import {AnimationModule} from './animation/animation.module';
import {AppRoutingModule} from './app.route.moudle';

@NgModule({
  declarations: [
    EagerComponent,
    AppComponent
  ],
  imports: [
    AnimationModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FacebookModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
