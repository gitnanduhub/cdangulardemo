import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should click change value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component=fixture.componentInstance;
    const checkBoxValueBeforeClicking=component.checkBoxValue;
    component.changed(null);
    const checkBoxValueAfterClicking=component.checkBoxValue;
    expect(checkBoxValueAfterClicking).toBe(!checkBoxValueBeforeClicking);
  });
  
  it(`should have as title 'awesomeApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('awesomeApp');
  });
});
