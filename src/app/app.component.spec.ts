import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

// describe('AppComponent here', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       providers:[AuthenticationService,HttpClient],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'loanmgmt-ui'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('loanmgmt-ui');
//   });

//   // it('should render title', () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   fixture.detectChanges();
//   //   const compiled = fixture.nativeElement;
//   //   expect(compiled.querySelector('.content span').textContent).toContain('loanmgmt-ui app is running!');
//   // });
// });


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
  it(`should have as title 'loanmgmt-ui'`, () => {
      
        expect(component.title).toEqual('loanmgmt-ui');
      });
})

