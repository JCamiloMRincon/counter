import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-substract',
  templateUrl: './button-substract.component.html',
  styleUrls: ['./button-substract.component.css']
})
export class ButtonSubstractComponent {

  @Input()
  counter: number = 0;

  @Output()
  onSubstract: EventEmitter<number> = new EventEmitter();

  substract() {
    this.counter--;
    this.onSubstract.emit(this.counter);
  }

}
