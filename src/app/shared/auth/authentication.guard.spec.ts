import { TestBed } from '@angular/core/testing';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

// describe('AuthenticationGuard', () => {
//   let guard: AuthenticationGuard;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     guard = TestBed.inject(AuthenticationGuard);
//   });

//   it('should be created', () => {
//     expect(guard).toBeTruthy();
//   });
// });


describe('Authentication guard',()=>{
  var component:AuthenticationGuard;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[AuthenticationGuard],
      providers:[],
      imports:[Router]
    })
    let sn:Router;
    component=new AuthenticationGuard(sn);
  });
  it('should create Guard',()=>{
    expect(component).toBeTruthy();
  });
})