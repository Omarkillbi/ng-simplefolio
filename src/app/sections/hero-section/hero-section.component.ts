import {AfterViewInit, Component, Output, EventEmitter} from '@angular/core';
import { AnimationEvent } from "@angular/animations";
import { appearAnimation } from '../../shared/utilities/animations';
import { personalData } from '../../data';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss', 'hero-section.component.query.scss'],
  animations: [ appearAnimation ]
})
export class HeroSectionComponent implements AfterViewInit {

  titleState = 'standBy';
  buttonState: String;

  constructor() {
    this.buttonState = 'standBy'
  }

  ngAfterViewInit(): void {
    this.titleState="in";
  }

  animationDone(event: AnimationEvent) {
    if(event.totalTime)
      this.buttonState = 'in';
  }

  getData() {
    return { fullName: personalData.fullName, position: personalData.position };
  }

  scrollToAboutSection() {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
}
