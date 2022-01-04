import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedimagesComponent } from './feedimages.component';

describe('FeedimagesComponent', () => {
  let component: FeedimagesComponent;
  let fixture: ComponentFixture<FeedimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedimagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
