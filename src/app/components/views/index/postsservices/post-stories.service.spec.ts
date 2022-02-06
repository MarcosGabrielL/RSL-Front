import { TestBed } from '@angular/core/testing';

import { PostStoriesService } from './post-stories.service';

describe('PostStoriesService', () => {
  let service: PostStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
