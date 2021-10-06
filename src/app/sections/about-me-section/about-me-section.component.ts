import {Component, HostListener, OnInit} from '@angular/core';
import {
  appear,
  appearIn,
  appearFromBottom,
  appearFromLeft
} from '../../shared/utilities/animations';



@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss', 'about-me-section.component.query.scss'],
  animations: [ appearIn, appear, appearFromBottom, appearFromLeft ]
})
export class AboutMeSectionComponent implements OnInit {
  triggered = false;
  pictureState = 'standBy';
  textState = 'standBy';
  titleState = 'standBy';

  constructor() {
    this.textState = window.innerWidth > 768 && !this.triggered ? 'standBy' : 'standBy';
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    if (window.scrollY  > 200 && !this.triggered) {
      this.pictureState = 'in';
      this.textState = window.innerWidth > 768 ? 'in' : 'in';
      this.titleState = 'in';
      this.triggered = true;
    }
  }

  ngOnInit(): void {}

}
