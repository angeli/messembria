import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ApartmentDatesComponent} from './apartment-dates.component';

describe('ApartmentDatesComponent', () => {
  let component: ApartmentDatesComponent;
  let fixture: ComponentFixture<ApartmentDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentDatesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
