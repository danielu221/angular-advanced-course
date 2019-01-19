import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuTabComponent } from './au-tab/au-tab.component';
import { AuTabPanelComponent } from './au-tab-panel/au-tab-panel.component';

let fixture: ComponentFixture<AppComponent>;
let component: any;
let el: DebugElement;
let tabPanel: DebugElement;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,AuTabComponent,AuTabPanelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    tabPanel = el.query(By.css('#tab-panel'));

    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should find one tab inside the tab container', async(() => {
    const tabs = tabPanel.queryAll(By.css('.tab'));
    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(1);
  }));

  it('should find the login tab button marked as active', async(() => {
    console.log(tabPanel)
    const selectedButton = tabPanel.query(By.css('ul.tab-panel-buttons li.selected')).nativeElement;

    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent.trim()).toBe('Login')
  }));

  it('should switch to the Login Tab', async(() => {
    const tabButtons = tabPanel.queryAll(By.css('ul.tab-panel-buttons li'))

    tabButtons[2].nativeElement.click();
    console.log(tabPanel)
    fixture.detectChanges();
    const conctactEmail =tabPanel.query(By.css('.contact-email')).nativeElement;
    const selectedButton = tabPanel.query(By.css('ul.tab-panel-buttons li.selected')).nativeElement;

    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent.trim()).toBe('Contact')
  }));

});
