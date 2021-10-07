import { AfterViewChecked, Component, HostListener } from '@angular/core';
import { dynamicAppear } from '../../shared/utilities/animations';
import { projects } from './mockData';
@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss', 'project-section.component.query.scss'],
  animations: [ dynamicAppear ]
})
export class ProjectsSectionComponent implements AfterViewChecked {
  projects = projects;
  animationState = { title: 'standBy', projects: new Array(projects.length).fill('standBy') }
  titleState = 'standBy';
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    let currentScrolledElement =  window.innerWidth > 991 ?
      Math.trunc((window.scrollY - 950) / 300) :
      Math.trunc((window.scrollY - 950) / 500) ;
    if ( window.scrollY > 900 )
      this.animationState.title = 'in';
    if ( window.scrollY > 750 && this.animationState.projects[currentScrolledElement] !== 'in') {
      this.animationState.projects[currentScrolledElement] = 'in';
    }
  }


  ngAfterViewChecked(): void {
    let currentScrolledElement =  window.innerWidth > 991 ?
      Math.trunc((window.scrollY - 950) / 350) :
      Math.trunc((window.scrollY - 950) / 500) ;
    for(let i=0; i<currentScrolledElement; i++) {
      this.animationState.projects[i] = 'in';
    }
  }

}
