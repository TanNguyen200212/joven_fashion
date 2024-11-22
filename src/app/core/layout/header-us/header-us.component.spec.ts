import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUsComponent } from './header-us.component';

describe('HeaderUsComponent', () => {
  let component: HeaderUsComponent;
  let fixture: ComponentFixture<HeaderUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderUsComponent]
    });
    fixture = TestBed.createComponent(HeaderUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
