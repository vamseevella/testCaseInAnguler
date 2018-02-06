import {
  Component,
  Input,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  AnimationEvent
} from '@angular/animations';

import {Hero} from '../services/hero.service';

@Component({
  selector: 'app-hero-list-multistep',
  template: `
    <ul>
      <li *ngFor="let hero of heroes"
          (@flyInOut.start)="animationStarted($event)"
          (@flyInOut.done)="animationDone($event)"
          [@flyInOut]="'in'">
        {{hero.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./hero-list.component.scss'],
  /* The element here always has the state "in" when it
   * is present. We animate two transitions: From void
   * to in and from in to void, to achieve an animated
   * enter and leave transition. Each transition is
   * defined in terms of multiple keyframes, to give it
   * a bounce effect.
   */
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)', offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)', offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class HeroListMultistepComponent {
  @Input() heroes: Hero[];

  animationStarted(event: AnimationEvent) {
    console.warn('Animation started: ', event);
  }

  animationDone(event: AnimationEvent) {
    console.warn('Animation done: ', event);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
