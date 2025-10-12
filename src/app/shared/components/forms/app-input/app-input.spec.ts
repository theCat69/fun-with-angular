import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInput } from './app-input';

describe('AppInput', () => {
  let component: AppInput;
  let fixture: ComponentFixture<AppInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInput],
    }).compileComponents();

    fixture = TestBed.createComponent(AppInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
