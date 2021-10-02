import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss', 'about-me-section.component.query.scss'],
  animations: [
    trigger('pictureAnimation', [
      state("standBy", style({
        'opacity': '0',
        'transform': 'translateY(15%)'
      })),
      state("In", style({
        'opacity': '1',
        'transform': 'translateY(0)'
      })),
      transition('standBy => In', animate("900ms 0ms cubic-bezier(0.5, 0, 0, 1)"))
    ]),
    trigger('textAnimation', [
      state("standBy", style({
        'opacity': '0',
        'transform': 'translateX(-5%)'
      })),
      state("In", style({
        'opacity': '1',
        'transform': 'translateX(0)'
      })),
      transition('standBy => In', animate("900ms 0ms cubic-bezier(0.5, 0, 0, 1)"))
    ]),
    trigger('titleAnimation', [
      state("standBy", style({
        'opacity': '0',
      })),
      state("In", style({
        'opacity': '1',
      })),
      transition('standBy => In', animate("900ms 0ms cubic-bezier(0.5, 0, 0, 1)"))
    ])
  ]
})
export class AboutMeSectionComponent implements OnInit {
  triggered = false;
  pictureState = 'standBy';
  textState = 'standBy';
  titleState = 'standBy';

  constructor() { }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    if (window.scrollY  > 200 && this.triggered === false) {
      this.pictureState = 'In';
      this.textState = 'In';
      this.titleState = 'In';
      this.triggered = true;
    }
  }

  ngOnInit(): void {
  }

}
