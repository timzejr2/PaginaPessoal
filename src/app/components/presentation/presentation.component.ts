import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

const enterImageTransition = transition(':enter', [
  style({
    transform: 'translateX(80%)',
    opacity:0,
  }),
  animate('1s ease-in', style({
    transform: 'translateX(0)',
    opacity:1
  }))
]);

const exitImageTransition = transition(':leave', [
  style({
    opacity:0,
  }),
  animate('1s ease-out', style({opacity:1}))
]);

const enterTransition = transition(':enter', [
  style({
    transform: 'translateX(-10%)',
    opacity:0,
  }),
  animate('1s ease-in', style({
    transform: 'translateX(0)',
    opacity:1
  }))
]);

const exitTransition = transition(':leave', [
  style({
    opacity:0,
  }),
  animate('1s ease-out', style({opacity:1}))
]);

const imageFadeIn = trigger('imageFadeIn', [enterImageTransition]);
const imageFadeOut = trigger('imageFedeOut', [exitImageTransition]);
const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fedeOut', [exitTransition]);

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
  animations: [fadeIn, fadeOut, imageFadeIn, imageFadeOut]
})
  /*animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter', [
        animate(300, style({
          transform: 'translateX(0)',
          opacity:1
        }))
      ])
    ])
  ],
  templateUrl: 'presentation.component.html',
  styleUrls: ['presentation.component.css']
})*/
export class PresentationComponent implements OnInit, OnDestroy {
  isShown : boolean = false
  imageShown : boolean = false

  ngOnInit(): void {
      this.isShown = true
  }

  ngOnDestroy(): void {
      this.isShown = false
  }



  

}




