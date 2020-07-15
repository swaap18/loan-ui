import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router'
import { SearchLoanComponent } from './search-loan.component';
import { LoanService } from '../../services/loan.service';

// describe('SearchLoanComponent', () => {
//   let component: SearchLoanComponent;
//   let fixture: ComponentFixture<SearchLoanComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SearchLoanComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SearchLoanComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe('Search loan Component',()=>{
  var component:SearchLoanComponent;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[SearchLoanComponent],
      providers:[],
      imports:[Router]
    })
    let sn:Router;
    let loanService: LoanService
    component=new SearchLoanComponent(sn,loanService);
  });
  it('Should create Search Loan Component',()=>{
    expect(component).toBeTruthy();
  });
  it('Search form should be invalid as id is less than 3 digit',()=>{
    component.form.controls['loanId'].setValue('23');
    expect(component.form.valid).toBeFalsy();
  }) ;
  it('Search form should be valid as id is more than 3 digit',()=>{
    component.form.controls['loanId'].setValue('2314');
    expect(component.form.valid).toBeTruthy();
  }) ;

  it('Reset Button', () => {
    component.resetOnClick
    expect(component.resetOnClick.length).toBeFalsy;
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



// import {HarnessLoader} from '@angular/cdk/testing';
// import { DatePipe } from '@angular/common';
// import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
// import {MatButtonHarness} from '@angular/material/button/testing';
// import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from '../../app-routing.module';
// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { Component, ViewChild, OnInit } from '@angular/core';

// let loader:HarnessLoader;
// describe('Serch Component 2', () => {
//     let component: SearchLoanComponent;
//     let fixture: ComponentFixture<SearchLoanComponent>;
//     beforeEach(async(() => {
      
//       TestBed.configureTestingModule({
//         declarations: [ SearchLoanComponent ],
//         imports:[AppRoutingModule,HttpClientModule],
//         providers:[HttpClientModule]
//       })
//       .compileComponents();
//     }));
  
//     beforeEach(() => {
//       fixture = TestBed.createComponent(SearchLoanComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges();
//     });
    
//     loader = TestbedHarnessEnvironment.loader(fixture)
//     it('should create', () => {
//       expect(component).toBeTruthy();
//     });
//     it('button should work in Search Loan', async () => {
//       //const buttons = await loader.getAllHarnesses(MatButtonHarness); // length: 3
//       const info = await loader.getHarness(MatButtonHarness.with({selector: '#more-info'}));
//       // const firstButton = await loader.getHarness(MatButtonHarness); // === buttons[0]
//     });
  
//    });