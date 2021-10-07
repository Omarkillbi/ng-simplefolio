import {AfterViewChecked, Component, HostListener, ViewChild} from '@angular/core';
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
  projectHeight = 0;
  @ViewChild('Project') elementView: any;
  constructor() { }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    let currentScrolledElement = Math.trunc((window.scrollY - 950) / this.projectHeight);
    if ( window.scrollY > 900 && this.animationState.projects[currentScrolledElement] !== 'in') {
      this.animationState.title = 'in';
      this.animationState.projects[currentScrolledElement] = 'in';
    }
  }

  ngAfterViewChecked(): void {
    this.projectHeight = this.elementView.nativeElement.offsetHeight;
    let currentScrolledElement = Math.trunc((window.scrollY - 950) / this.projectHeight);
    for(let i=0; i<currentScrolledElement; i++) {
      this.animationState.projects[i] = 'in';
    }
  }

}
