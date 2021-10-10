import { Component, OnInit } from '@angular/core';
import { style } from './data';

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

  ngOnInit(): void {
    this.styles.forEach(data => {
      document.documentElement.style.setProperty(`--${data.name}`, data.value);
    });
  }
}

