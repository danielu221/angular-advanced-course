import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  TemplateRef,
  ViewChild,
  Input
} from '@angular/core';
import { AuTabComponent } from 'app/au-tab/au-tab.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'au-tab-panel',
  templateUrl: './au-tab-panel.component.html',
  styleUrls: ['./au-tab-panel.component.scss']
})
export class AuTabPanelComponent implements AfterContentInit {
  @ContentChildren(AuTabComponent)
  tabs: QueryList<AuTabComponent>;

  @Input()
  headerTemplate: TemplateRef<any>

  ngAfterContentInit(): void {
    const selected = this.tabs.find(tab => tab.selected);
    if (!selected && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab: AuTabComponent) {
    this.tabs.forEach(tab => (tab.selected = false));
    tab.selected = true;
  }

  get tabsContext() {
    return {
      tabs: this.tabs
    };
  }
}
