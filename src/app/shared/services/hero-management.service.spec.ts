import { TestBed } from '@angular/core/testing';
import { DataProviderService, MockDataProviderService } from './data-provider.service';

import { HeroManagementService } from './hero-management.service';


describe('HeroManagementService', () => {
  let service: HeroManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DataProviderService, useClass: MockDataProviderService }
      ]
    });
    service = TestBed.inject(HeroManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
