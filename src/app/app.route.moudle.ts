import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EagerComponent} from './eager/eager.component';

const routes: Routes = [
  {path: '', redirectTo: 'eager', pathMatch: 'full'},
  {path: 'eager', component: EagerComponent},
  {path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule'},
  {path: 'animation', redirectTo: '/animation-example', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

