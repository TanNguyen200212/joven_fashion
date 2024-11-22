import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitySectionComponent } from './utility-section.component';

describe('UtilitySectionComponent', () => {
  let component: UtilitySectionComponent;
  let fixture: ComponentFixture<UtilitySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilitySectionComponent]
    });
    fixture = TestBed.createComponent(UtilitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
