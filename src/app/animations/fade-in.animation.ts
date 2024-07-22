import { trigger, transition, style, animate, keyframes } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 }))
  ])
]);

export const flyInLeftAnimation = trigger('flyInLeft', [
  transition(':enter', [
    animate('1s ease-in', keyframes([
      style({ transform: 'translateX(-100%)', opacity: 0, offset: 0 }),
      style({ transform: 'translateX(0)', opacity: 1, offset: 1.0 })
    ]))
  ])
]);

export const flyInRightAnimation = trigger('flyInRight', [
  transition(':enter', [
    animate('1s ease-in', keyframes([
      style({ transform: 'translateX(100%)', opacity: 0, offset: 0 }),
      style({ transform: 'translateX(0)', opacity: 1, offset: 1.0 })
    ]))
  ])
]);