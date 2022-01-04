import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedvideosComponent } from './feedvideos.component';

describe('FeedvideosComponent', () => {
  let component: FeedvideosComponent;
  let fixture: ComponentFixture<FeedvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedvideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
