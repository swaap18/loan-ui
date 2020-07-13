import { TestBed } from '@angular/core/testing';

import { LoanService } from './loan.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs'
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { HttpTestingController } from '@angular/common/http/testing'; 
import { Loan } from '../shared/model/loan';

describe('LoanService', () => {
  let service: LoanService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let empService: LoanService;
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      providers:[HttpClientModule],
      imports:[HttpClientModule,HttpClientTestingModule]
    });
    service = TestBed.inject(LoanService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    //empService = TestBed.inject(EmployeeService);
  });

  it('should Loan Service be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should Add a Loan', () => {
    //const newEmp: Employee = { name: 'Mahesh', age: 25 };
    let loan:Loan
    service.addLoan(loan).subscribe(
      data => expect(data).toEqual(loan, 'should return the Loan'),
      fail
    );

    // addEmploye should have made one request to POST employee
    const req = httpTestingController.expectOne(service.uri+'loan');
    expect(req.request.method).toEqual('POST');
    //expect(req.request.body).toEqual(loan);
  });
  it('Should Get all Loan', () => {
    let loan:Loan
    service.getLoans().subscribe(
      data => expect(data).toEqual(loan, 'should return the Loans'),
      fail
    )
    const req = httpTestingController.expectOne(service.uri+'loan');
    expect(req.request.method).toEqual('GET');
  });
  it('Should Edit Loan', () => {
    let loan:Loan
    service.editLoan(loan).subscribe(
      data => expect(data).toEqual(loan, 'should Edit the Loans'),
      fail
    )
    const req = httpTestingController.expectOne(service.uri+'loan');
    expect(req.request.method).toEqual('POST');
  });


  // it('should add loan',()=>{
  //   let service=TestBed.get(LoanService);
  //   let v=spyOn(service,'addLoan').and.returnValue(Observable.create([1,2,3]));
  //   fixture
  //   expect(v).toBe([1,2,3]);
  // })
});

// describe('Loan Service ',()=>{
//   var component:LoanService;
//   beforeEach(()=>{
//     TestBed.configureTestingModule({
//       declarations:[LoanService],
//       providers:[],
//       imports:[]
//     })
    
//     let httpClient:HttpClient
//     component=new LoanService(httpClient);
//   });
//   it('Should create LoanService',()=>{
//     expect(component).toBeTruthy();
//   });
// })
