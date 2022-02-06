import { TestBed } from '@angular/core/testing';

import { PostTextaoService } from './post-textao.service';

describe('PostTextaoService', () => {
  let service: PostTextaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostTextaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
