import {
  Component,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import {Hero} from '../services/hero.service';

@Component({
  selector: 'app-hero-list-twoway',
  template: `
    <ul>
      <li *ngFor="let hero of heroes"
          [@heroState]="hero.state"
          (click)="hero.toggleState()">
        {{hero.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./hero-list.component.scss'],
  /*
   * Define two states, "inactive" and "active", and the end
   * styles that apply whenever the element is in those states.
   * Then define an animated transition between these two
   * states, in *both* directions.
   */
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive <=> active', animate('100ms ease-out'))
    ])
  ]
})
export class HeroListTwowayComponent {
  @Input() heroes: Hero[];
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
