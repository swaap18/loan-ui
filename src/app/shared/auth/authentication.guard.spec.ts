import { TestBed } from '@angular/core/testing';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import {AuthenticationService} from '../../services/authentication.service'

class MockLoanService {
  loandId:number;
  navigate(){
    return null;
  }
}
// describe('AuthenticationGuard', () => {
//   let guard: AuthenticationGuard;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//   //  declarations:[AuthenticationGuard],
//      providers: [{provide: AuthenticationService, useClass: { } },{ provide: Router, useClass: MockLoanService }],
//      imports:[]
//     }).compileComponents();
//     guard = TestBed.inject(AuthenticationGuard);
//   });

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


describe('Authentication guard',()=>{
  var component:AuthenticationGuard;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[AuthenticationGuard],
      providers:[{ provide: Router, useValue: { navigate: () => null }  }],
      imports:[Router]
    })
    let sn:Router;
    component=new AuthenticationGuard(sn);
  });
  it('should create Guard',()=>{
    expect(component).toBeTruthy();
  });
  it('should Be Able to activate when logged In', () => {
        // const storageService = TestBed.get(AuthenticationService);
        // storageService.isLoggedIn = false;
        sessionStorage.setItem('username',"kunal");
        const res = component.canActivate(null, null);
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
})