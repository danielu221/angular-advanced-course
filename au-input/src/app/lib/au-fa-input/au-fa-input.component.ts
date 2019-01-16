import {
  Component,
  OnInit,
  Input,
  ContentChild,
  AfterContentInit,
  HostBinding
} from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements AfterContentInit {
  @Input() icon: string;

  @ContentChild(InputRefDirective) input: InputRefDirective;

  constructor() {}

  ngAfterContentInit(): void {
    // console.log('input', this.input);
    if (!this.input) {
      console.error('au-fa-input component needs input');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses = {
      fa: true
    };

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }
}
