import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CounterComponent } from "./counter.component"
import { ButtonAddComponent } from "./button-add/button-add.component";
import { ButtonSubstractComponent } from "./button-substract/button-substract.component";

// Unit Testing
describe("CounterComponent Unit Testing", () => {

  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CounterComponent,
        ButtonAddComponent,
        ButtonSubstractComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // HTML Test
  it("The CounterComponent must be created", () => {
    expect(component).toBeTruthy();
  });

  it("The text Counter: 0 must be created", () => {
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector("h1")?.textContent)
      .toEqual("Counter: 0");
  });

  // Typescript Test
  it("Counter default value is 0", () => {
    const counter = new CounterComponent();
    expect(counter.counter).toBe(0);
  });

});

// Integration Testing
describe("Integration Testing", () => {

  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CounterComponent,
        ButtonAddComponent,
        ButtonSubstractComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Click button add event", () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const counterValue = compiled.querySelector("h1")!;
    const btnAdd: HTMLElement = fixture.debugElement.nativeElement.querySelector("#add");

    btnAdd.click();
    fixture.detectChanges();

    expect(counterValue.textContent).toEqual("Counter: 1");
  });

  it("Click button substract event", () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const counterValue = compiled.querySelector("h1")!;
    const btnSubstract: HTMLElement = fixture.debugElement.nativeElement.querySelector("#substract");

    btnSubstract.click();
    fixture.detectChanges();

    expect(counterValue.textContent).toEqual("Counter: -1");
  });

});


