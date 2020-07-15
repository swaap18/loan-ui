import { TestBed } from '@angular/core/testing';

import { LoanService } from './loan.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs'
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { HttpTestingController } from '@angular/common/http/testing'; 
import { Loan } from '../shared/model/loan';
import { AuthenticationService } from './authentication.service';
import { User } from '../shared/model/user';

describe('Authentication Service', () => {
  let service: AuthenticationService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let empService: LoanService;
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      providers:[HttpClientModule],
      imports:[HttpClientModule,HttpClientTestingModule]
    });
    service = TestBed.inject(AuthenticationService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    //empService = TestBed.inject(EmployeeService);
  });

  it('should Authentication service be created', () => {
    expect(service).toBeTruthy();
  });
  it('should set user name and login',()=>{
     service.setUserName('Vijay');
     expect(service.loggedIn).toBeTruthy();
  })
  it('should get username',()=>{
      service.setUserName('Vijay')
      expect(service.getUserName()).toBe('Vijay');
  })
  it('should logout',()=>{
      //sessionStorage.removeItem('username');
     // sessionStorage.setItem('username','Vijay');
     if(sessionStorage.getItem('username')){
      service.logout();
      let value:any;
      value=service.loggedIn.value;
      expect(value).toBeFalsy();

     }
  })
  it('should get user byname',()=>{
    let user:User;
    service.getUserByUserName('vijay').subscribe(use=>user=use)
      const req = httpTestingController.expectOne(service.uri+'user/search/findByUserName?name='+'vijay');
      expect(req.request.method).toEqual('GET');
     expect(user).toBe(user);
  })
});