import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialShell } from './material-shell';

describe('MaterialShell', () => {
  let component: MaterialShell;
  let fixture: ComponentFixture<MaterialShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialShell],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
