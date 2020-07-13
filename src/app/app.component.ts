import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Observable } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Loan Management System';
  isLoggedIn: Observable<boolean>;

  constructor(private authService:AuthenticationService){
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout(){
    console.log(' ssfs');
    this.authService.logout();
  }
  
}
