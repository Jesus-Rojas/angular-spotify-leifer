import { ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';

describe('ImgBrokenDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef('')
    const directive = new ImgBrokenDirective(el);
    expect(directive).toBeTruthy();
  });
});
