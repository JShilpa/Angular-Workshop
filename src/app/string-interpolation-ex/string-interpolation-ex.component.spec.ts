import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterpolationExComponent } from './string-interpolation-ex.component';

describe('StringInterpolationExComponent', () => {
  let component: StringInterpolationExComponent;
  let fixture: ComponentFixture<StringInterpolationExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringInterpolationExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringInterpolationExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
