import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageComponent } from './master-page.component';

describe('MasterPageComponent', () => {
  let component: MasterPageComponent;
  let fixture: ComponentFixture<MasterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
