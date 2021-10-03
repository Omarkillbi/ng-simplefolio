import {AfterViewInit, Component, OnInit} from '@angular/core';
import { AnimationEvent } from "@angular/animations";
import { appearIn } from '../../components/animations';

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
}
