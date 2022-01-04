import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesmenusideComponent } from './featuresmenuside.component';

describe('FeaturesmenusideComponent', () => {
  let component: FeaturesmenusideComponent;
  let fixture: ComponentFixture<FeaturesmenusideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesmenusideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesmenusideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
