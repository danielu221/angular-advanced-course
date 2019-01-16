import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuFaInputComponent } from './au-fa-input/au-fa-input.component';
import { InputRefDirective } from './common/input-ref.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AuFaInputComponent, InputRefDirective],
  imports: [BrowserModule, CommonModule],
  exports: [AuFaInputComponent, InputRefDirective]
})
export class AuInputModule {}
