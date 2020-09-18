import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClockComponentComponent } from './digital-clock-component.component';

describe('DigitalClockComponentComponent', () => {
  let component: DigitalClockComponentComponent;
  let fixture: ComponentFixture<DigitalClockComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalClockComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClockComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
