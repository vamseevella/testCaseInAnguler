import {
  NgModule,
  Component,
  OnInit
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/Rx';
import {ReactiveFormRouteModule} from './reactiveForm.route';

@Component({
  selector: 'app-reactive-model-form',
  template: `<input type="search"
                    class="form-control"
                    placeholder="Please enter search term"
                    [formControl]="searchField">
  <hr/>
  <ul>
    <li *ngFor="let search of searches">{{ search }}</li>
  </ul>
  `
})
class ReactiveModelFormComponent implements OnInit {

  searchField: FormControl;
  searches: string[] = [];

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
        this.searches.push(term);
      });
  }
}

@Component({
  selector: 'app-form',
  template: `
    <app-reactive-model-form></app-reactive-model-form>`
})
export class AppComponent {
}


@NgModule({
  imports: [
    ReactiveFormRouteModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ReactiveModelFormComponent
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppReactiveModule {
}

