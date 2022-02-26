import { TestBed } from '@angular/core/testing';

import { HeroManagementService } from './hero-management.service';

describe('StateManagementService', () => {
  let service: HeroManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
