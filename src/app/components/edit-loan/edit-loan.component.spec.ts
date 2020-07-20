import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EditLoanComponent } from './edit-loan.component';
import { FormBuilder} from '@angular/forms';
import { LoanService } from '../../services/loan.service';
import { Router, ActivatedRoute } from '@angular/router'
import { NotificationService } from '../../services/notification.service';
import { DebugElement } from '../../../../node_modules/@angular/core';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs'
import { Location } from "@angular/common";
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';

class MockLoanService {
  loandId: number;
  navigate() {
    return 'editLoan'
  }  
  success(){
    return 'Details Updated.';
  }
}


class SpyLocation {
  urlChanges: string[];
  path() {
    return "/searchloan"
  }
}

describe("Edit Loan", (() => {
  let component: EditLoanComponent;
  let loanService: LoanService;
  let notificationService: NotificationService;
  let fixture: ComponentFixture<EditLoanComponent>;
  let router: Router;
  let hostElement;
  let buttonDE: DebugElement;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLoanComponent],
      providers: [EditLoanComponent, FormBuilder, {
        provide: LoanService
      },
        { provide: Router, useClass: MockLoanService },
        { provide: ActivatedRoute, useClass: MockLoanService },
        { provide: NotificationService, useClass: MockLoanService },
        { provide: Location, useClass: SpyLocation }],
      imports: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EditLoanComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    loanService = TestBed.inject(LoanService);
    notificationService = TestBed.inject(NotificationService);
    hostElement = fixture.nativeElement;
  });

  it('should Edit Loan', () => {
    expect(component).toBeTruthy();
  });

  it('should the form be defined', () => {
    expect(component.form).toBeDefined();
  });

  it('should the form not be empty', () => {
    expect(component.form).toBeTruthy();
  });

  it('Edit loan form should be invalid ', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('Edit loan form LoanId filed should be exists', () => {
    expect(component.form.controls['loanId']).toBeTruthy();
  });

  it('Edit loan form should be have cancel button', () => {
    const cancelButton: HTMLElement = hostElement.querySelector('a');
    expect(cancelButton.textContent).toBe('Cancel');
  });

  it('Edit loan form should be have Submit button', () => {
    const submitButton: HTMLElement = hostElement.querySelector('button[type="submit"]');
    expect(submitButton.textContent).toBe('Submit');
  });

  // it('Edit loan form should be have Submit button disabled', () => {
  //   fixture.detectChanges();
  //   buttonDE = fixture.debugElement.query(By.css('button[type=submit]'));
  //   expect(buttonDE.nativeElement.disabled).toBeFalsy;
  // });

  it('Should call Edit loan service using Onspy', () => {
    let service = TestBed.get(LoanService)
    let notService = TestBed.get(NotificationService)
    let spy = spyOn(service, 'editLoan').and.callFake(t => {
      return Observable.create(1);
    });

    component.submit();
    expect(spy).toHaveBeenCalled();
  });

  it('Should call Notification service using Onspy', () => {
    let service = TestBed.get(LoanService)
    let notService = TestBed.get(NotificationService)
    //let spy2:any;
    //component.form.controls.loandId.setValue('123')
    let loan = component.form.value;
    spyOn(loanService, 'editLoan').and.returnValue(of({}))
    let spy2 = spyOn(notificationService, 'success')
    component.submit();
    expect(spy2).toHaveBeenCalled();
  })

  it('navigate to "search-loan" takes you to searchloan', fakeAsync(() => {
    router.navigate(['/searchloan']);
    tick();
    expect(location.path()).toBe('/searchloan');
  }));

  it('should call go_next', () => {
    //component.go_next();
    let val: Promise<boolean>
    val = Promise.resolve(true)
    let spy = spyOn(router, 'navigate').and.returnValue(val)
    component.go_next()
    expect(spy).toBeTruthy();
  })

}))
