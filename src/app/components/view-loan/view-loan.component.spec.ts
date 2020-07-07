import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanComponent } from './view-loan.component';
import { HttpClient } from '@angular/common/http';

// describe('ViewLoanComponent', () => {
//   let component: ViewLoanComponent;
//   let fixture: ComponentFixture<ViewLoanComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ViewLoanComponent ],
//       imports:[HttpClient],
//       providers:[HttpClient]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ViewLoanComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe('View Loan Component',()=>{
  // let fixture: ComponentFixture<LoginComponent>;
   var component: ViewLoanComponent;
   beforeEach(()=>{
     TestBed.configureTestingModule({
       declarations:[ViewLoanComponent],
       providers:[],
       imports:[]
     })
     
     let HttpClient:HttpClient;
     component=new ViewLoanComponent(HttpClient);
    // fixture = TestBed.createComponent(LoginComponent);
     //loader = TestbedHarnessEnvironment.loader(LoginComponent)
   });
   it('should create View Loan Component',()=>{
     expect(component).toBeTruthy();
   });
  })