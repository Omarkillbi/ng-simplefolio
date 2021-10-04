import {Component, HostListener, OnInit} from '@angular/core';
import { appear, appearIn } from '../../components/animations';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
  animations: [ appear, appearIn ]
})
export class ContactSectionComponent implements OnInit {

  titleState = 'standBy';
  infoState = 'standByBottom';
  triggered = false;
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    if (window.scrollY  > 2500 && !this.triggered) {
      this.titleState = 'In';
      this.infoState = 'inFromBottom';
    }
  }

  ngOnInit(): void {

  }

}
