import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeednoticiasComponent } from './feednoticias.component';

describe('FeednoticiasComponent', () => {
  let component: FeednoticiasComponent;
  let fixture: ComponentFixture<FeednoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeednoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeednoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
