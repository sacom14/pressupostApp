import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguageModalComponent } from './lenguage-modal.component';

describe('LenguageModalComponent', () => {
  let component: LenguageModalComponent;
  let fixture: ComponentFixture<LenguageModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LenguageModalComponent]
    });
    fixture = TestBed.createComponent(LenguageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
