import {Component, HostListener, OnInit} from '@angular/core';
import { appearIn } from '../../components/animations';
import { projects } from './mockData';
@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss', 'project-section.component.query.scss'],
  animations: [ appearIn ]
})
export class ProjectsSectionComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    let currentScrolledElement =  Math.trunc((window.scrollY - 950) / 350);
    if ( window.scrollY > 850 && !projects[currentScrolledElement].visible) {
      projects[currentScrolledElement].visible = true;
      // for (let i=0)
    }

    console.log("window.scrollY = " + Math.trunc((window.scrollY - 950) / 350));
  }

  getProject(): any {
    return projects;
  }

  ngOnInit(): void {}

}
