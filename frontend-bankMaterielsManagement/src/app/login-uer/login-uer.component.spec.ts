import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUerComponent } from './login-uer.component';

describe('LoginUerComponent', () => {
  let component: LoginUerComponent;
  let fixture: ComponentFixture<LoginUerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
