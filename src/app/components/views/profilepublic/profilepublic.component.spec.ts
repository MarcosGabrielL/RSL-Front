import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepublicComponent } from './profilepublic.component';

describe('ProfilepublicComponent', () => {
  let component: ProfilepublicComponent;
  let fixture: ComponentFixture<ProfilepublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilepublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilepublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
