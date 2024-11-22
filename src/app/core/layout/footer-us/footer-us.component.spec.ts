import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUsComponent } from './footer-us.component';

describe('FooterUsComponent', () => {
  let component: FooterUsComponent;
  let fixture: ComponentFixture<FooterUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterUsComponent]
    });
    fixture = TestBed.createComponent(FooterUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
