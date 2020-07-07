import { TestBed } from '@angular/core/testing';

import { LoanService } from './loan.service';
import { HttpClient } from '@angular/common/http';

// describe('LoanService', () => {
//   let service: LoanService;

//   beforeEach(() => {
    
//     TestBed.configureTestingModule({
//       providers:[HttpClient],
//       imports:[HttpClient]
//     });
//     service = TestBed.inject(LoanService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('Loan Service ',()=>{
  var component:LoanService;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[LoanService],
      providers:[],
      imports:[]
    })
    
    let httpClient:HttpClient
    component=new LoanService(httpClient);
  });
  it('Should create LoanService',()=>{
    expect(component).toBeTruthy();
  });
})
