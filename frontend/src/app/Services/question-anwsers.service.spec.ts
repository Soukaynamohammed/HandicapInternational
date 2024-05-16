import { TestBed } from '@angular/core/testing';

import { QuestionAnwsersService } from './question-anwsers.service';

describe('QuestionAnwsersService', () => {
  let service: QuestionAnwsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionAnwsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
