import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

const enterImageTransition = transition(':enter', [
  style({
    transform: 'translateX(-80%)',
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
    opacity:0,
  }),
  animate('1s ease-in', style({
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
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [fadeIn, fadeOut, imageFadeIn, imageFadeOut]
})
export class BannerComponent {

}
