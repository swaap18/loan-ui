import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddLoanComponent } from './add-loan.component';
import { FormBuilder } from '@angular/forms';
import { LoanService } from '../../services/loan.service';
import { Router } from '../../../../node_modules/@angular/router';
import { NotificationService } from '../../services/notification.service';
import { DebugElement } from '../../../../node_modules/@angular/core';
import { By } from '@angular/platform-browser';
import {Observable} from 'rxjs'
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { MatSnackBarModule, MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
class MockLoanService {
  loandId:number;
  navigate(params){
    //return 'searchloan';

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
  let router:Router;
  let hostElement;
  let buttonDE: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[AddLoanComponent],
      providers:[AddLoanComponent,FormBuilder,{ provide: LoanService },{ provide: Router, useClass: MockLoanService },{ provide: NotificationService }],
      imports:[HttpClientModule,MatSnackBarModule,BrowserAnimationsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AddLoanComponent);
    component = fixture.componentInstance;
    router=TestBed.inject(Router)
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
    let notService=TestBed.get(NotificationService)
    let spy=spyOn(service,'addLoan').and.callFake(t=>{
      return Observable.create(1);
    });
  
    component.submit();
    expect(spy).toHaveBeenCalled();
    
  });
  it('Should call Notification service using Onspy',()=>{
    let service=TestBed.get(LoanService)
    let notService=TestBed.get(NotificationService)
    let spy2:any;
    //component.form.controls.loandId.setValue('123')
    let loan=component.form.value;
    loanService.addLoan(loan).subscribe(res=>{spy2=spyOn(notificationService,'success').and.callFake(t=>{ return Observable.create(1); })
      expect(spy2).toHaveBeenCalled();
      expect(component.go_next()).toHaveBeenCalled();},er=>{   spy2=spyOn(notificationService,'warn').and.callFake(t=>{ return Observable.create(1); })
      expect(spy2).toHaveBeenCalled();})
      //return Observable.create(1);
    })
    //fixture.detectChanges()
  // it('should call search loan from add page',()=>{
  //   let router=TestBed.get(Router);
  //   let spy=spyOn(router,'navigate')
  //   //component.go_next();
  //   expect(spy).toBe("searchloan")
  // })
  it('should go_next',()=>{
      //  // component.go_next();
      //   let router=TestBed.get(Router)
      //   //let spy=spyOn(router,'navigate')
      //   let spy:any
      //   component.go_next()
      //    // this.router.navigate(['/searchloan'])
      //    spy= router.navigate();
      //    expect(spy).toBe('searchloan')
      // let spy:number
      // component.go_next()
      // fixture.detectChanges()
      // spyOn(component,'go_next')
      // fixture.detectChanges()
      // let spy2=spyOn(router,'navigate')
      // expect(spy2).toHaveBeenCalledWith(['/searchloan'])
  })
  // it('should call submit',()=>{
  //   let notService=TestBed.get(NotificationService);
  //   let loanService=TestBed.get(LoanService)
  //   component.submit()
  //   loanService.addLoan(null)
  //   let val=notService.success()
  //   expect(val).toBe('Adding Loan Submitted Successfully.');
  // })
  // it('should route to search loan',fakeAsync(()=>{
  //   let serv=TestBed.get(Router)
  //   component.go_next()
  //   let spy=spyOn(serv,'navigate')
  //   fixture.detectChanges();
  //   tick();
  //   expect(spy).toHaveBeenCalled()
  // }))
})
