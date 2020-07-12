import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from '../../node_modules/rxjs';

describe('AppComponent here', () => {
  let fixture : ComponentFixture<AppComponent>;
  let appComponent : AppComponent;
  let authSerivceStb : Partial<AuthenticationService>;
  let authSerivce : AuthenticationService;
  let hostElement;
  beforeEach(async(() => {
    authSerivceStb ={
      loggedIn: new BehaviorSubject<boolean>(true), 
       logout() {        
        this.loggedIn=false;
      },
      get isLoggedIn() {
        return this.loggedIn;
      }
    }
    TestBed.configureTestingModule({
      imports: [],
      providers:[{ provide: AuthenticationService, useValue:authSerivceStb}],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    authSerivce = TestBed.inject(AuthenticationService);
    hostElement = fixture.nativeElement;
  }));

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it(`should have as title 'Loan Management System'`, () => {
    expect(appComponent.title).toEqual('Loan Management System');
  });
  it(`should have as isLoggedIn 'true'`, () => {
    expect(appComponent.isLoggedIn).toBeTruthy
  });
  it(`should have as Tool bar name empty`, () => {
    const nameDisplay: HTMLElement = hostElement.querySelector('span')
    expect(nameDisplay.textContent).toBe('');
  });
  it(`should have as Tool bar name 'Loan Management system'`, () => {
    fixture.detectChanges();
    const nameDisplay: HTMLElement = hostElement.querySelector('span')
    expect(nameDisplay.textContent).toBe('Loan Management System');
  });
  it(`should have logout button visible`, () => {
    fixture.detectChanges();
    const nameDisplay: HTMLElement = hostElement.querySelector('a');
    expect(nameDisplay.textContent).toBe('Log out');
  });
  it(`should have logout button Invisible`, () => {
     authSerivceStb.logout();
     fixture.detectChanges();
     const nameDisplay: HTMLElement = hostElement.querySelector('a');
     expect(nameDisplay).toBeTruthy;//text is empty
   });
});


describe('App Component',()=>{
  var component:AppComponent;
  beforeEach(()=>{
      TestBed.configureTestingModule({
      declarations:[AppComponent],
      providers:[AuthenticationService],
      imports:[]
    })
    let service:AuthenticationService;
    component=new AppComponent(service);
  });
  it('should create App Component',()=>{
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Loan Management System'`, () => {
      
        expect(component.title).toEqual('Loan Management System');
      });
})

