import { TestBed } from '@angular/core/testing';

import { PostEnqueteService } from './post-enquete.service';

describe('PostEnqueteService', () => {
  let service: PostEnqueteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostEnqueteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
