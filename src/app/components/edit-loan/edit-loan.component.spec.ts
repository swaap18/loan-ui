import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditLoanComponent } from './edit-loan.component';
import {Router} from '@angular/router'
import { AuthenticationService } from '../../services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormBuilder } from '@angular/forms';

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



describe('Edit Loan Component',()=>{
  var component:EditLoanComponent;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[EditLoanComponent],
      providers:[],
      imports:[]
    })
    let fb=new FormBuilder();
    let sn:MatSnackBar;
    component=new EditLoanComponent(fb,sn);
  });
  it('should create Edit Loan Component',()=>{
    expect(component).toBeTruthy();
  });
  // it('should create two form controls',()=>{
  //     expect(component.form.contains('username')).toBe(true);
  //     expect(component.form.contains('password')).toBe(true);
  //    });
  //   it('Login form shoudl be invalid',()=>{
  //     component.form.controls['username'].setValue('');
  //     expect(component.form.valid).toBeFalsy();
  //   }) 
})
