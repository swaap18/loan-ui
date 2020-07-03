import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup=new FormGroup({
  username: new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required]),
  });
  hide:boolean=true;

  constructor(public router:Router,  private authService:AuthenticationService) { }

  submit(){
    console.log(this.f.username.value);
    console.log(this.form.controls.password.value);
    console.log(this.form.value);
    this.authService.setUserName(this.form.controls.username.value);
    console.log(this.authService.getUserName());
    this.router.navigate(['\searchloan']);
  }
  get f(){
    return this.form.controls;
  }
  flagHide(){
    this.hide=!this.hide;
  }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.form['username'].hasError('required')) {
      return 'You must enter a value';
    }
}
}
