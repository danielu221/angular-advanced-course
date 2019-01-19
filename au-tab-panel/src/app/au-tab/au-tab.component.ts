import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'au-tab',
  templateUrl: './au-tab.component.html',
  styleUrls: ['./au-tab.component.scss']
})
export class AuTabComponent implements OnInit {
  @Input() title: string;

  @Input() selected = false;

  constructor() {}

  ngOnInit() {}
}
