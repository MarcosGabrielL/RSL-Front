import { TestBed } from '@angular/core/testing';

import { PostReelService } from './post-reel.service';

describe('PostReelService', () => {
  let service: PostReelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostReelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
