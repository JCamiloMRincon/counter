import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddComponent } from './button-add.component';

describe('ButtonAddComponent', () => {

  let component: ButtonAddComponent;
  let fixture: ComponentFixture<ButtonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should create add button", () => {
    expect(component).toBeTruthy();
  });

  it("Should emit the value of 1", () => {
    let newCounter = 0;

    component.onAdd.subscribe(counter => {
      newCounter = counter;
    })
    component.add();

    expect(newCounter).toBe(1);
  });

});
