import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl, FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../../services/authentication.service';
import { TestBedH}


// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ],
//       imports:[Router]
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

//   it('should create two form controls',()=>{
//     expect(component.form.contains('username')).toBe(true);
//     expect(component.form.contains('password')).toBe(true);
//   });
//   // it('form invalid as username is empty',async(()=>{
//   //   component.form.controls['username'].setValue('');
//   //   expect(component.form.valid).toBeFalsy();
//   // }))
// });


describe('Login Component',()=>{
  var component:LoginComponent;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[LoginComponent],
      providers:[AuthenticationService],
      imports:[Router]
    })
    let sn:Router;
    let service:AuthenticationService;
    component=new LoginComponent(sn,service);
  });
  it('should create Login Loan Component',()=>{
    expect(component).toBeTruthy();
  });
  it('should create two form controls',()=>{
      expect(component.form.contains('username')).toBe(true);
      expect(component.form.contains('password')).toBe(true);
     });
    it('Login form shoudl be invalid',()=>{
      component.form.controls['username'].setValue('');
      expect(component.form.valid).toBeFalsy();
    }) 
})



