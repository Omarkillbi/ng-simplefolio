import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { AboutMeSectionComponent } from './sections/about-me-section/about-me-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { OtherLinksSectionComponent } from './sections/other-links-section/other-links-section.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AnimatedButtonComponent } from './components/animated-button/animated-button.component';
import { ProjectTemplateComponent } from './components/project-template/project-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    AboutMeSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    OtherLinksSectionComponent,
    AnimatedButtonComponent,
    ProjectTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
