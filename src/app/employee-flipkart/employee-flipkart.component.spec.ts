import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFlipkartComponent } from './employee-flipkart.component';

describe('EmployeeFlipkartComponent', () => {
  let component: EmployeeFlipkartComponent;
  let fixture: ComponentFixture<EmployeeFlipkartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFlipkartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFlipkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
