import { TestBed } from '@angular/core/testing';

import { PostImagemService } from './post-imagem.service';

describe('PostImagemService', () => {
  let service: PostImagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostImagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
