import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditLoanComponent } from './edit-loan.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoanService } from '../../services/loan.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Loan } from '../../shared/model/loan';
import { NotificationService } from '../../services/notification.service';
import { AuthenticationService } from '../../services/authentication.service';
import { DebugElement } from '../../../../node_modules/@angular/core';


import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs'
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';

class MockLoanService {
  loandId: number;
  navigate() {
    return 'editLoan'
  }
}


describe("Edit Loan", (() => {
  let component: EditLoanComponent;
  let loanService: LoanService;
  loan: Loan;
  let notificationService: NotificationService;
  let fixture: ComponentFixture<EditLoanComponent>;
  let hostElement;
  let buttonDE: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLoanComponent],
      providers: [EditLoanComponent, FormBuilder, {
        provide: LoanService
      },
        { provide: Router, useClass: MockLoanService },
        { provide: ActivatedRoute, useClass: MockLoanService},
        { provide: NotificationService, useClass: MockLoanService }],
      imports:[HttpClientModule]  
    }).compileComponents();

    fixture = TestBed.createComponent(EditLoanComponent);
    component= fixture.componentInstance;

    loanService = TestBed.inject(LoanService);
    notificationService = TestBed.inject(NotificationService);
    
    hostElement= fixture.nativeElement;
  });

  it('Edit form should not be empty', () => {
    expect(component.form).toBeTruthy;
  });

  
  // it("Edit Loan - Submit", (() => {
  //   let editForm: FormBuilder;
  //   component.form.controls.loandId.setValue('1212');
  //   expect(component.submit()).toHaveBeenCalled;
  // }));
}));


// describe('EditLoanComponent', () => {
//   let component: EditLoanComponent;
//   let fixture: ComponentFixture<EditLoanComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ EditLoanComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(EditLoanComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });



// describe('Edit Loan Component',()=>{
//   var component:EditLoanComponent;
//   beforeEach(()=>{
//     TestBed.configureTestingModule({
//       declarations:[EditLoanComponent],
//       providers:[],
//       imports:[]
//     })
//     let fb=new FormBuilder();
//     let sn:MatSnackBar;
//     let rt:ActivatedRoute;
//     let loanservice:LoanService;
//     let router:Router;
//     component=new EditLoanComponent(fb,sn,loanservice,rt,router);
//   });
//   it('should create Edit Loan Component',()=>{
//     expect(component).toBeTruthy();
//   });
  // it('should create two form controls',()=>{
  //     expect(component.form.contains('username')).toBe(true);
  //     expect(component.form.contains('password')).toBe(true);
  //    });
  //   it('Login form shoudl be invalid',()=>{
  //     component.form.controls['username'].setValue('');
  //     expect(component.form.valid).toBeFalsy();
  //   }) 
//})line34-51
