import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalComponent } from './page-modal.component';

describe('PageModalComponent', () => {
  let component: PageModalComponent;
  let fixture: ComponentFixture<PageModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageModalComponent]
    });
    fixture = TestBed.createComponent(PageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
