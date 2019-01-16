import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { InputRefDirective } from './lib/common/input-ref.directive';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

let fixture:ComponentFixture<AppComponent>;
let app: AppComponent;
let el: DebugElement;
let emailField:DebugElement

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,AuFaInputComponent,InputRefDirective
            ],
        }).compileComponents();
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        emailField = el.query(By.css('#email-field'));
        fixture.detectChanges();
    }));

    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));


    it('should create a font awesome email input', async(() => {
        expect(emailField).toBeTruthy();
    }));

    it('should create a font awesome icon for email input', async(() => {
        expect(emailField.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
    }));

    it('should have projected input inside email field', async(() => {
        expect(emailField.query(By.css('input.email-input'))).toBeTruthy();
    }));






});
