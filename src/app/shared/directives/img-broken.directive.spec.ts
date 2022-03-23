import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';

// TODO: Componente de prueba
@Component({
  template: '<img class="testing-directive" appImgBroken [src]="srckMock" >'
})

class TestComponent {
  srckMock: any = null
}

describe('ImgBrokenDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create an instance', () => {
    const el = new ElementRef('')
    const directive = new ImgBrokenDirective(el);
    expect(directive).toBeTruthy();
  });

  it('TestComponent deberia instanciarse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('Directiva debe cambiar a la imagen de assets', (done: DoneFn) => {
    // Arrange
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = beforeImgElement.src // ? url antes de ser cambiada por la directiva
    component.srckMock = undefined

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = afterImgElement.src // ? url despues de ser cambiada por la directiva
      expect(afterImgSrc).toMatch(/\b.(png|jpg|jpeg)\b/); // Si cumple con el regex es verdadero
      done()
    }, 3000);
  });
});
