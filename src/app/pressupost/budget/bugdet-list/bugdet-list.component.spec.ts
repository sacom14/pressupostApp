import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugdetListComponent } from './bugdet-list.component';

describe('BugdetListComponent', () => {
  let component: BugdetListComponent;
  let fixture: ComponentFixture<BugdetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BugdetListComponent]
    });
    fixture = TestBed.createComponent(BugdetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
