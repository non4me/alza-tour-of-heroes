import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HeroManagementService } from '_shared/services/hero-management.service';
import { NameLengthLimitDirective } from './name-length-limit.directive';

class MockElementRef implements ElementRef {
  nativeElement = {};
}



describe('NameLengthLimitDirective', () => {

  it('should create an instance', () => {
    const directive = new NameLengthLimitDirective({} as ElementRef, {} as Renderer2);
    expect(directive).toBeTruthy();
  });
});
