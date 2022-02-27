import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { DataProviderService } from '_shared/services/data-provider.service';
import { HeroDetailComponent } from './hero-detail.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class MockActivatedRoute {
  snapshot = {
    params: {
      heroId: 11
    }
  };
}

describe('HeroDetailComponent', () => {
  const hero = { id: 11, name: 'Mr. Nace', favorite: false };
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        HeroDetailComponent
      ],
      providers: [
        DataProviderService, // Běžně potřebujeme používat mocky pro servisy, ale tuhle jsem nechal pro účely testování as is.
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    route = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init with existing Hero', () => {
    expect(component.hero).toEqual(hero)
  });

  it('should init with not existing Hero', () => {
    route.snapshot.params.heroId = null;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.hero).toBeUndefined()
  });
});
