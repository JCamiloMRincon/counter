import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSubstractComponent } from './button-substract.component';

describe('ButtonSubstractComponent', () => {

  let component: ButtonSubstractComponent;
  let fixture: ComponentFixture<ButtonSubstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSubstractComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSubstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should create substract button", () => {
    expect(component).toBeTruthy();
  });

  it("Should emit the value of -1", () => {
    let newCounter = 0;

    component.onSubstract.subscribe(counter => {
      newCounter = counter;
    })
    component.substract();

    expect(newCounter).toBe(-1);
  });
  
});
