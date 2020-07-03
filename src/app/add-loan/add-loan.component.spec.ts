import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoanComponent } from './add-loan.component';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

// describe('AddLoanComponent', () => {
//   let component: AddLoanComponent;
//   let fixture: ComponentFixture<AddLoanComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AddLoanComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AddLoanComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('AddLoanComponent',()=>{
  var component:AddLoanComponent;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[AddLoanComponent],
      imports:[MatSnackBar]
    })
    let sn:MatSnackBar;
    component=new AddLoanComponent(new FormBuilder(),sn);
  });
  it('should create Add Loan',()=>{
    expect(component).toBeTruthy();
  });
})
