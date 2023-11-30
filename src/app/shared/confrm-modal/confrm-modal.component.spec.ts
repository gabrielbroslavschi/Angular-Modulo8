import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrmModalComponent } from './confrm-modal.component';

describe('ConfrmModalComponent', () => {
  let component: ConfrmModalComponent;
  let fixture: ComponentFixture<ConfrmModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfrmModalComponent]
    });
    fixture = TestBed.createComponent(ConfrmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
