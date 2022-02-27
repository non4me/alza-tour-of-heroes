import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataProviderService, MockDataProviderService } from '_shared/services/data-provider.service';
import { HeroManagementService } from '_shared/services/hero-management.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        {provide: HeroManagementService, useVlaue: {}},
        { provide: DataProviderService, useClass: MockDataProviderService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
