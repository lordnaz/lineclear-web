import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TncCarriageComponent } from './tnc-carriage.component';

describe('TncCarriageComponent', () => {
  let component: TncCarriageComponent;
  let fixture: ComponentFixture<TncCarriageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TncCarriageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TncCarriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
