import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ? Patro AAA
  it('Debe retornar invalido', () => {
    // ! Arrange
    const mockCredentials = {
      email: '0x0x0x0x0x0',
      password: '1111111111111111'
    }
    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    // ! Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)
    // ! Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

  it('El boton deberia tener la palabra "Iniciar Sesión"', () => {

    const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Iniciar Sesión');
  });
});
