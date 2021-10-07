import { Component, OnInit } from '@angular/core';
import { personalData } from '../../data';

@Component({
  selector: 'app-other-links-section',
  templateUrl: './other-links-section.component.html',
  styleUrls: ['./other-links-section.component.scss']
})
export class OtherLinksSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getData() {
    return {
      twitter: personalData.socialMediaLinks.twitter,
      codepen: personalData.socialMediaLinks.codepen,
      linkedin: personalData.socialMediaLinks.linkedin,
      github: personalData.socialMediaLinks.github
    };
  }

  scrollToAboutSection() {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

}
