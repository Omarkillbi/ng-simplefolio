import {AfterViewChecked, Component, HostListener, OnInit} from '@angular/core';
import { appearIn, appear } from '../../shared/utilities/animations';
import { projects } from './mockData';
@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss', 'project-section.component.query.scss'],
  animations: [ appear, appearIn ]
})
export class ProjectsSectionComponent implements AfterViewChecked {
  projects = projects;
  titleState = 'standBy';
  constructor() {

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    let currentScrolledElement =  window.innerWidth > 991 ?
      Math.trunc((window.scrollY - 950) / 300) :
      Math.trunc((window.scrollY - 950) / 500) ;
    if ( window.scrollY > 1000 )
      this.titleState = 'In';
    if ( window.scrollY > 750 && !projects[currentScrolledElement].visible) {
      projects[currentScrolledElement].visible = true;
    }
  }


  ngAfterViewChecked(): void {
    let currentScrolledElement =  window.innerWidth > 991 ?
      Math.trunc((window.scrollY - 950) / 350) :
      Math.trunc((window.scrollY - 950) / 500) ;
    for(let i=0; i<currentScrolledElement; i++) {
      projects[i].visible = true;
    }
  }

}
