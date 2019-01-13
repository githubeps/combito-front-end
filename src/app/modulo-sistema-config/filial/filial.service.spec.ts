import { TestBed, inject } from '@angular/core/testing';

import { FilialService } from './filial.service';

describe('FilialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilialService]
    });
  });

  it('should ...', inject([FilialService], (service: FilialService) => {
    expect(service).toBeTruthy();
  }));
});
