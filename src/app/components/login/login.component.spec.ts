import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup,Validators, FormBuilder} from '@angular/forms'
import { Router} from '@angular/router'
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../../services/authentication.service';

import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatButtonHarness} from '@angular/material/button/testing';
import { Routes } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { By } from '../../../../node_modules/@angular/platform-browser';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/getUserByUserName/observable/from';
// import 'rxjs/getUserByUserName/empty';

// describe('LoginComponent 2', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   beforeEach(async(() => {
    
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ],
//       imports:[AppRoutingModule,HttpClientModule,DatePipe],
//       providers:[AuthenticationService,HttpClientModule,DatePipe]
//     })
    
  
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   // it('button should work in Login', async () => {
//   //   //const buttons = await loader.getAllHarnesses(MatButtonHarness); // length: 3
//   //   const firstButton = await loader.getHarness(MatButtonHarness); // === buttons[0]
//   // });

//  });
class MockLoanService {
  loandId:number;
}
let loader:HarnessLoader;
describe('Login Component',()=>{
  let fixture: ComponentFixture<LoginComponent>;
  var component:LoginComponent;
  let service:AuthenticationService;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[LoginComponent],
      providers:[LoginComponent,HttpClientModule,{ provide: Router, useClass: MockLoanService },{ provider: AuthenticationService, useClass: MockLoanService }],
      imports:[HttpClientModule]
    }).compileComponents();
    
    //let sn:Router;
    //service=new AuthenticationService(null,null);
    //component=new LoginComponent(sn,service);
   fixture = TestBed.createComponent(LoginComponent);
   component = fixture.componentInstance;
  
    //loader = TestbedHarnessEnvironment.loader(LoginComponent)
  });
  it('should create Login Loan Component',()=>{
    expect(component).toBeTruthy();
  });
  it('should create two form controls',()=>{
    expect(component.form.contains('username')).toBeTruthy;
    expect(component.form.contains('password')).toBeTruthy;
  });
  it('Login form User Name filed should be invalid as first name is empty',()=>{
    expect(component.form.controls['username'].valid).toBeFalsy();
  });
  it('Login form Password filed should be invalid as first name is empty',()=>{
    expect(component.form.controls['password'].valid).toBeFalsy();
  });
  it('Initial Login form should be invalid',()=>{
    expect(component.form.valid).toBeFalsy();
  });
  it('Login form should be valid',()=>{
    component.form.controls['username'].setValue('User1');
    component.form.controls['password'].setValue('Pass1')
    expect(component.form.valid).toBeTruthy();
  });
  it('Login form User Name filed Validations',()=>{
    let errors = {};
    let userName = component.form.controls['username'];
    errors = userName.errors || {};
    expect(errors['required']).toBeTruthy();
    userName.setValue('user1');
    errors = userName.errors || {};
    expect(errors['required']).toBeFalsy();
  });
  it('Login form Password filed Validation',()=>{
    let errors = {};
    let password = component.form.controls['password'];
    errors = password.errors ||{};
    expect(errors['required']).toBeTruthy();
    password.setValue('pass1');
    errors = password.errors ||{};
    expect(errors['required']).toBeFalsy();
  });
  it(`Login form should be have 'Login' Title `,()=>{
    const title = fixture.debugElement.query(By.css('mat-card-title'));
    expect(title.nativeElement.textContent).toBe('Login');
  });
  it(`Login form should be have 'userName' controller `,()=>{
    const userName = fixture.debugElement.query(By.css('formControlName[username]'));
    expect(userName).toBeTruthy;
  });
  it(`Login form should be have 'password' controller `,()=>{
    const password = fixture.debugElement.query(By.css('placeholder[Password]'));
    expect(password).toBeTruthy;
  });
  it(`Login form component.errorsould be empty `,()=>{
    expect(component.error).toBe('');
    component.error = 'error message';
    expect(component.error).toBe('error message');
  });
  it(`Login form should be have toggle display for 'error message'`,()=>{
    let error = fixture.debugElement.query(By.css('.error'));
    expect(error).toBeTruthy;
    component.error = ' error message    ';
    fixture.detectChanges();
    error = fixture.debugElement.query(By.css('.error'));
    expect(error.nativeElement.textContent).toContain(' error message    ');
  });
  it('Login form should have Submit button disabled',()=>{
    fixture.detectChanges();
    let buttonDE = fixture.debugElement.query(By.css('button[type=submit]'));
    expect(buttonDE.nativeElement.disabled).toBeTruthy;
  });
  it('Login form should have Submit button Enabled',()=>{
    let userName = component.form.controls['username'];
    userName.setValue('user1');
    let password = component.form.controls['password'];
    password.setValue('pass1');    
    expect(component.form.valid).toBeTruthy;
    fixture.detectChanges();
    let buttonDE = fixture.debugElement.query(By.css('button[type=submit]'));
    expect(buttonDE.nativeElement.disabled).toBeFalsy;
  });

    // it('should call service',()=>{
    //   let spy=spyOn(service,'getUserByUserName').and.callFake(t=>{
    //     return Observable.empty();
    //   });
    //   component.authenticateUser("swap","passw");
    //   expect(spy).toHaveBeenCalled();
    // });
})



