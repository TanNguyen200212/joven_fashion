import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareusolComponent } from './careusol.component';

describe('CareusolComponent', () => {
  let component: CareusolComponent;
  let fixture: ComponentFixture<CareusolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareusolComponent]
    });
    fixture = TestBed.createComponent(CareusolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
