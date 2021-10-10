import { Component, OnInit } from '@angular/core';
import { style, personalData } from './data';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'ng-simplefolio';

  styles = [
    { name: 'main-color', value: style.gradiantStartColor },
    { name: 'second-color', value: style.gradiantEndColor },
  ];
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.styles.forEach(data => {
      document.documentElement.style.setProperty(`--${data.name}`, data.value);
    });
      this.titleService.setTitle(personalData.fullName + ' | Portfolio');
  }
}

