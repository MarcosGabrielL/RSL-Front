import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpassemailComponent } from './resetpassemail.component';

describe('ResetpassemailComponent', () => {
  let component: ResetpassemailComponent;
  let fixture: ComponentFixture<ResetpassemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpassemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpassemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
