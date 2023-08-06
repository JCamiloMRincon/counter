import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './counter.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonSubstractComponent } from './button-substract/button-substract.component';

@NgModule({
  declarations: [
    CounterComponent,
    ButtonAddComponent,
    ButtonSubstractComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {  }
