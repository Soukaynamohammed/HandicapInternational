import { TestBed } from '@angular/core/testing';

import { InfocardService } from './infocard.service';

describe('InfocardService', () => {
  let service: InfocardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfocardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
