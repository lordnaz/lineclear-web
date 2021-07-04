import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineshieldComponent } from './lineshield.component';

describe('LineshieldComponent', () => {
  let component: LineshieldComponent;
  let fixture: ComponentFixture<LineshieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineshieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineshieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
