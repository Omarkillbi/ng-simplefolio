import {Component, HostListener, OnInit} from '@angular/core';
import { appearAnimation } from '../../shared/utilities/animations';
import { personalData } from '../../data';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss', 'about-me-section.component.query.scss'],
  animations: [ appearAnimation ]
})
export class AboutMeSectionComponent implements OnInit {
  // params will be applied for the text conditional animation input
  animation = { state: 'standBy', params: { startX: '0', startY: '0' }};

  constructor() { }

  ngOnInit(): void {
    this.animation.params = window.innerWidth > 768 && this.animation.state === 'standBy' ?
      { startX: '-5%', startY: '0'} :
      { startX: '0', startY: '15%'};
  }

  getData() {
    return {
      imageName: personalData.PersonalPictureName,
      description: personalData.description,
      resumeURL: personalData.resumeURL
    };
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    if (window.scrollY  > 200 && this.animation.state === 'standBy') {
      this.animation.state = 'in';
    }
  }



}
