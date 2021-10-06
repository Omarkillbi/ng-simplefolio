import {AfterViewInit, Component, Output, EventEmitter} from '@angular/core';
import { AnimationEvent } from "@angular/animations";
import { appearIn } from '../../shared/utilities/animations';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss', 'hero-section.component.query.scss'],
  animations: [ appearIn ]
})
export class HeroSectionComponent implements AfterViewInit {

  titleState = 'standByLeft';
  buttonState = 'standByLeft';

  constructor() { }

  animationDone(event: AnimationEvent) {
    if(event.totalTime)
      this.buttonState = 'inFromLeft';
  }

  ngAfterViewInit(): void {
    this.titleState="inFromLeft";
  }

  scrollToAboutSection() {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }


}
