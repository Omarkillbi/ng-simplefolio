import {AfterViewChecked, Component, HostListener, ViewChild} from '@angular/core';
import { appearAnimation } from '../../shared/utilities/animations';
import { projects } from '../../data';
@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss', 'project-section.component.query.scss'],
  animations: [ appearAnimation ]
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
    if ( window.scrollY > 800)
      this.animationState.title = 'in';
    if ( window.scrollY > 800 && this.animationState.projects[currentScrolledElement] !== 'in') {
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
