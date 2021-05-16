import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitstopComponent } from './pitstop.component';

describe('PitstopComponent', () => {
  let component: PitstopComponent;
  let fixture: ComponentFixture<PitstopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PitstopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PitstopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
