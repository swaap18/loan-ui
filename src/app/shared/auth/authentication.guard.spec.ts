import { TestBed } from '@angular/core/testing';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import {AuthenticationService} from '../../services/authentication.service'
import { async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { Injectable } from '@angular/core';


class MockLoanService {
  loandId:number;
  navigate(params){
    return null;
  }
}
describe('AuthenticationGuard', () => {
  let guard: AuthenticationGuard;
  let fixture : ComponentFixture<AuthenticationGuard>;
  let router:Router
  let component:AuthenticationGuard;
  beforeEach(() => {
    TestBed.configureTestingModule({
     providers: [{ provide: Router, useClass: MockLoanService }],
     imports:[]
    }).compileComponents();
   // fixture = TestBed.createComponent(AuthenticationGuard);
    guard = TestBed.inject(AuthenticationGuard);
    //component = fixture.componentInstance;
    router=TestBed.inject(Router)
  });

//   it('should be created', () => {
//     expect(guard).toBeTruthy();
//   });
//   // it('should not be able to activate when logged out', () => {
//   //   const storageService = TestBed.get(AuthenticationService);
//   //   storageService.isLoggedIn = false;
//   //   const res = guard.canActivate(null, null);
//   //   expect(res).toBeFalsy();
//   // });
// });


// describe('Authentication guard',()=>{
//   var component:AuthenticationGuard;
//   let fixture : ComponentFixture<AuthenticationGuard>;
//   beforeEach(()=>{
//     TestBed.configureTestingModule({
//       declarations:[AuthenticationGuard],
//       providers:[{ provide: Router, useValue: { navigate: () => null }  }],
//       imports:[Router]
//     })
//     let sn:Router;
//     component=new AuthenticationGuard(sn);
//   });
  it('should create Guard',()=>{
    expect(guard).toBeTruthy();
  });
  it('should Be Able to activate when logged In', () => {
        // const storageService = TestBed.get(AuthenticationService);
        // storageService.isLoggedIn = false;
        sessionStorage.setItem('username',"kunal");
        const res = guard.canActivate(null, null);
        expect(res).toBeTruthy();
      });
      // it('should Not Be Able to activate when logged OUT', () => {
      //   // const storageService = TestBed.get(AuthenticationService);
      //   // storageService.isLoggedIn = false;
      //   sessionStorage.removeItem('username');
      //   const res = component.canActivate(null, null);
      //   component.router.navigated=false;
      //   expect(res).toBeFalsy();
      // });  
      it('should Route to login',fakeAsync(()=>{
        //component.go_next();
        //fixture=TestBed.createComponent(AuthenticationGuard)
        ///let router=TestBed.inject(Router)
       // let r=component.router
        //TestBed.inject(r)
        let val:Promise<boolean>
        val=Promise.resolve(true)
        sessionStorage.removeItem('usename')
        let spy=spyOn(router,'navigate').and.returnValue(val)
       // component.go_next()
        expect(spy).toBeTruthy();
        let s=router.navigate(['/login'])
        //expect(s).toHaveBeenCalledWith(['/login'])
        expect(s).toBeDefined()
       }))
       
})