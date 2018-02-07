import {NgModule} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {AppComponent} from './reactiveForm.component';

const routes: Routes = [
  {path: 'reactiveForm-example', component: AppComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReactiveFormRouteModule {
}
