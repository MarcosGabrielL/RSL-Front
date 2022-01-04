import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedproductComponent } from './feedproduct.component';

describe('FeedproductComponent', () => {
  let component: FeedproductComponent;
  let fixture: ComponentFixture<FeedproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
