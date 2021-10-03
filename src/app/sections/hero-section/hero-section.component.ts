import {AfterViewInit, Component, OnInit} from '@angular/core';
import {animate, animation, state, style, transition, trigger, useAnimation} from "@angular/animations";
import { AnimationEvent } from "@angular/animations";
import { slideIn } from '../../components/animations';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss', 'hero-section.component.query.scss'],
  animations: [ slideIn ]
})
export class HeroSectionComponent implements AfterViewInit {

  titleState = 'standByRight';
  buttonState = 'standByRight';
  constructor() { }

  animationDone(event: AnimationEvent) {
    if(event.totalTime)
      this.buttonState = 'inFromRight';
  }

  ngAfterViewInit(): void {
    this.titleState="inFromRight";
  }
}
