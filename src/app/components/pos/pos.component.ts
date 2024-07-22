import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { fadeInAnimation, flyInLeftAnimation, flyInRightAnimation } from '../../animations/fade-in.animation';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css',
  animations: [flyInLeftAnimation, flyInRightAnimation]
})
export class PosComponent {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  isVisible: boolean = false;

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.unobserve(this.el.nativeElement);
          }
        });
      }, {
        threshold: 0.1 // Adjust this value to change when the animation triggers
      });

      observer.observe(this.el.nativeElement);
    }
  }
}
