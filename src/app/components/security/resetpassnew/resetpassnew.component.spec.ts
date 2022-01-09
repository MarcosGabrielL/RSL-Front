import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpassnewComponent } from './resetpassnew.component';

describe('ResetpassnewComponent', () => {
  let component: ResetpassnewComponent;
  let fixture: ComponentFixture<ResetpassnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpassnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpassnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
