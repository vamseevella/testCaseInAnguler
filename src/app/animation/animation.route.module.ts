import {NgModule} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {HeroTeamBuilderComponent} from './hero-team-builder.component';

const routes: Routes = [
  {path: 'animation-example', component: HeroTeamBuilderComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AnimationRouteModule {
}
