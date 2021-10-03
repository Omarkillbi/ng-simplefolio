import {Component, HostListener, OnInit} from '@angular/core';
import { appearIn } from '../../components/animations';
import { projects } from './mockData';
@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
  animations: [ appearIn ]
})
export class ProjectsSectionComponent implements OnInit {

  imgState = 'standByRight';
  infoState = 'standByLeft';

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    let currentScrolledElement =  Math.trunc((window.scrollY - 950) / 350);
    if ( window.scrollY > 850 && !projects[currentScrolledElement].visible) {
      projects[currentScrolledElement].visible = true;
    }

    console.log("window.scrollY = " + Math.trunc((window.scrollY - 950) / 350));
  }

  getProject(): any {
    return projects;
  }

  ngOnInit(): void {
    console.log(this.getProject());
  }

}
