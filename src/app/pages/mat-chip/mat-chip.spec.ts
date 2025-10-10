import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatChip } from './mat-chip';

describe('MatChip', () => {
  let component: MatChip;
  let fixture: ComponentFixture<MatChip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatChip],
    }).compileComponents();

    fixture = TestBed.createComponent(MatChip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
