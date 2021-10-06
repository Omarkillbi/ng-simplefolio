import {AfterViewInit, Component, Output, EventEmitter} from '@angular/core';
import { AnimationEvent } from "@angular/animations";
import { appearFromLeft } from '../../shared/utilities/animations';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss', 'hero-section.component.query.scss'],
  animations: [ appearFromLeft ]
})
export class HeroSectionComponent implements AfterViewInit {

  titleState = 'standBy';
  buttonState: String;

  constructor() {
    this.buttonState = 'standBy'
  }

  animationDone(event: AnimationEvent) {
    console.log(event)
    if(event.totalTime)
      this.buttonState = 'in';
  }

  ngAfterViewInit(): void {
    this.titleState="in";
  }

  scrollToAboutSection() {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
}
