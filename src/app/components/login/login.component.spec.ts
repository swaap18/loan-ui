import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl, FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../../services/authentication.service';

import {HarnessLoader} from '@angular/cdk/testing';
import { DatePipe } from '@angular/common';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatButtonHarness} from '@angular/material/button/testing';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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

let loader:HarnessLoader;
describe('Login Component',()=>{
 // let fixture: ComponentFixture<LoginComponent>;
  var component:LoginComponent;
  let service:AuthenticationService;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[LoginComponent],
      providers:[AuthenticationService],
      imports:[Router]
    })
    
    let sn:Router;
    service=new AuthenticationService(null,null);
    component=new LoginComponent(sn,service);
   // fixture = TestBed.createComponent(LoginComponent);
    //loader = TestbedHarnessEnvironment.loader(LoginComponent)
  });
  it('should create Login Loan Component',()=>{
    expect(component).toBeTruthy();
  });
  it('should create two form controls',()=>{
      expect(component.form.contains('username')).toBe(true);
      expect(component.form.contains('password')).toBe(true);
     });
    it('Login form should be invalid',()=>{
      component.form.controls['username'].setValue('');
      expect(component.form.valid).toBeFalsy();
    }) ;
    // it('should call service',()=>{
    //   let spy=spyOn(service,'getUserByUserName').and.callFake(t=>{
    //     return Observable.empty();
    //   });
    //   component.authenticateUser("swap","passw");
    //   expect(spy).toHaveBeenCalled();
    // });
})



