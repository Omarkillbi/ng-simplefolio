import {Component, HostListener, OnInit} from '@angular/core';
import { appear, appearIn } from '../../components/animations';



@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss', 'about-me-section.component.query.scss'],
  animations: [ appearIn, appear ]
})
export class AboutMeSectionComponent implements OnInit {
  triggered = false;
  pictureState = 'standByBottom';
  textState = '';
  titleState = 'standBy';

  constructor() {
    this.textState = window.innerWidth > 768 && !this.triggered ? 'standByLeft' : 'standByBottom';
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    if (window.scrollY  > 200 && !this.triggered) {
      this.pictureState = 'inFromBottom';
      this.textState = window.innerWidth > 768 ? 'inFromLeft' : 'inFromBottom';
      this.titleState = 'In';
      this.triggered = true;
    }
  }

  ngOnInit(): void {}

}
