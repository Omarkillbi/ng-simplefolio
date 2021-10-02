import {AfterViewInit, Component, OnInit} from '@angular/core';
import {animate, animation, state, style, transition, trigger, useAnimation} from "@angular/animations";
import { AnimationEvent } from "@angular/animations";

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss', 'hero-section.component.query.scss'],
  animations: [
    trigger('heroAnimation', [
      state("In", style({
        'opacity': '1',
        'transform': 'translateX(0)'
      })),
      state("standBy", style({
        'opacity': '0',
        'transform': 'translateX(-5%)'
      })),
      transition('standBy => In', animate("900ms 0ms cubic-bezier(0.5, 0, 0, 1)"))
    ])
  ]
})
export class HeroSectionComponent implements AfterViewInit {

  titleState = 'standBy';
  buttonState = 'standBy';
  constructor() { }

  animationDone(event: AnimationEvent) {
    if(event.totalTime)
      this.buttonState = 'In';
  }

  ngAfterViewInit(): void {
    this.titleState="In";
  }
}
