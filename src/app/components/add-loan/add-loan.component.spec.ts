import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoanComponent } from './add-loan.component';
import { FormBuilder } from '@angular/forms';
import { LoanService } from '../../services/loan.service';
import { Router } from '../../../../node_modules/@angular/router';
import { NotificationService } from '../../services/notification.service';
import { DebugElement } from '../../../../node_modules/@angular/core';
import { By } from '@angular/platform-browser';
import {Observable} from 'rxjs'
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
class MockLoanService {
  loandId:number;
  navigate():string{
    return 'searchloan';

  }
  success(){
    return 'Adding Loan Submitted Successfully.';
  }
}

describe('AddLoanComponent', ()=>{
  let component:AddLoanComponent;
  let loanService:LoanService;
  let notificationService:NotificationService;
  let fixture : ComponentFixture<AddLoanComponent>;
  let hostElement;
  let buttonDE: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[AddLoanComponent],
      providers:[AddLoanComponent,FormBuilder,{ provide: LoanService },{ provide: Router, useClass: MockLoanService },{ provide: NotificationService, useClass: MockLoanService }],
      imports:[HttpClientModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AddLoanComponent);
    component = fixture.componentInstance;

    //component = TestBed.inject(AddLoanComponent);    
    loanService = TestBed.inject(LoanService);    
    notificationService = TestBed.inject(NotificationService);    
    hostElement = fixture.nativeElement;
  });

   it('should create Add Loan',()=>{
    expect(component).toBeTruthy();
  });
  it('should the form be defined',()=>{
    expect(component.form).toBeDefined();
  });
  it('should the form not be empty',()=>{
    expect(component.form).toBeTruthy();
  });
  it('Add loan form should be invalid ',()=>{
      expect(component.form.valid).toBeFalsy();
  }) ;
  it('Add loan form first Name filed should be exists',()=>{
      expect(component.form.controls['firstName']).toBeTruthy();
  }) ;
  it('Add loan form first Name filed should be invalid as first name is empty',()=>{
    expect(component.form.controls['firstName'].valid).toBeFalsy();
  }) ;
  it('Add loan form first Name filed should be enabled',()=>{
    expect(component.form.controls['firstName'].enabled).toBeTruthy
  }) ;
  it('Add loan form first Name filed validity',()=>{
    let errors = {};
    let firstName = component.form.controls['firstName'];
    errors = firstName.errors || {};
    expect(errors['required']).toBeTruthy
    firstName.setValue('user1');
    expect(errors['required']).toBeFalsy
  });

  it('Add loan form should be invalid as loanId is empty',()=>{
    expect(component.form.controls['loanId'].enabled).toBeTruthy
  });
  it('Add loan form loanId field should be invalid as Id is empty',()=>{
    expect(component.form.controls['loanId'].valid).toBeFalsy
  });
  it('Add loan form loanId filed validity',()=>{
    let errors = {};
    let loanId = component.form.controls['loanId'];
    errors = loanId.errors || {};
    expect(errors['required']).toBeTruthy
    loanId.setValue('22233');
    expect(errors['required']).toBeFalsy
  });
  //TODO - Similary can write test case for all other controls

  it('Add loan form should be have cancel button',()=>{
    const cancelButton: HTMLElement = hostElement.querySelector('a');
    expect(cancelButton.textContent).toBe('Cancel');
  });
  it('Add loan form should be have Reset button',()=>{
    const cancelButton: HTMLElement = hostElement.querySelector('button[type="reset"]');
    expect(cancelButton.textContent).toBe('Reset');
  });
  it('Add loan form should be have Submit button',()=>{
    const cancelButton: HTMLElement = hostElement.querySelector('button[type="submit"]');
    expect(cancelButton.textContent).toBe('Add Loan');
  });
  it('Add loan form should be have Submit button disabled',()=>{
    fixture.detectChanges();
    buttonDE = fixture.debugElement.query(By.css('button[type=submit]'));
    expect(buttonDE.nativeElement.disabled).toBeTruthy;
  });
  it('Add loan form should be have Form Title as Add Loan',()=>{
    const cancelButton: HTMLElement = hostElement.querySelector('mat-card-title');
    expect(cancelButton.textContent).toBe('Add Loan');
  });
  it('Add loan form template should have First Name Form field',()=>{
    const firstName: HTMLElement = hostElement.querySelector('input[placeholder="First Name"]');
    expect(firstName).toBeTruthy();
  });
  it('Add loan form template should have Last Name Form field',()=>{
    const lastName: HTMLElement = hostElement.querySelector('input[formControlName="lastName"');
    expect(lastName).toBeTruthy();
  });
  it('Add loan form template should have Loan Id field',()=>{
    const loanId: HTMLElement = hostElement.querySelector('input[formControlName="loanId"]');
    expect(loanId).toBeTruthy();
  });
  //TODO - need to write for other input fields
  // it('should add loan',()=>{
  //   let service=TestBed.get(LoanService);
  //   let v=spyOn(service,'addLoan').and.returnValue(Observable.create(1));
  //   fixture.detectChanges();
  //   console.log(v)
  //   expect(v).toBe(1);
  // })
  it('Should call Add loan service using Onspy',()=>{
    let service=TestBed.get(LoanService)
    let spy=spyOn(service,'addLoan').and.callFake(t=>{
      return Observable.create(1);
    });
    component.submit();
    expect(spy).toHaveBeenCalled();
  });
  // it('should call search loan from add page',()=>{
  //   let router=TestBed.get(Router);
  //   let spy=spyOn(router,'navigate')
  //   //component.go_next();
  //   expect(spy).toBe("searchloan")
  // })
  it('should go_next',()=>{
       // component.go_next();
        let router=TestBed.get(Router)
        //let spy=spyOn(router,'navigate')
       let spy= router.navigate();
           component.go_next();
           expect(spy).toBe('searchloan')
  })
  it('should call submit',()=>{
    let notService=TestBed.get(NotificationService);
    let loanService=TestBed.get(LoanService)
    component.submit()
    loanService.addLoan(null)
    let val=notService.success()
    expect(val).toBe('Adding Loan Submitted Successfully.');
  })
})
