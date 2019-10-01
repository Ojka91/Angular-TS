import { TestBed } from '@angular/core/testing';

import { ServeiService } from './servei.service';

describe('ServeiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServeiService = TestBed.get(ServeiService);
    expect(service).toBeTruthy();
  });
});
