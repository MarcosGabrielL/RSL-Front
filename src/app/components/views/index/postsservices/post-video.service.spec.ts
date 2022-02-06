import { TestBed } from '@angular/core/testing';

import { PostVideoService } from './post-video.service';

describe('PostVideoService', () => {
  let service: PostVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
