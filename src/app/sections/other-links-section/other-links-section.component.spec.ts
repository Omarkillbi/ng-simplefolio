import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLinksSectionComponent } from './other-links-section.component';

describe('OtherLinksSectionComponent', () => {
  let component: OtherLinksSectionComponent;
  let fixture: ComponentFixture<OtherLinksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherLinksSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherLinksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
