import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../shared/model/user';



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

  user:User = new User();
  error:string;
  constructor(public router:Router,  private authService:AuthenticationService) {this.error=""; }

  submit(){
    console.log(this.f.username.value);
    console.log(this.form.controls.password.value);
    console.log(this.form.value);
    this.authenticateUser(this.f.username.value,this.f.password.value);
  }
  public authenticateUser(userName,password){
    this.authService.getUserByUserName(userName).subscribe(user =>{
      Object.assign(this.user, JSON.parse(user));
      //this.user = user;
      console.log("checking for password:"+password);
      console.log("checking for this.userPassword:"+this.user.userPassword);
     
      if(this.user.userPassword === password){
        console.log("Auth passed");
        this.authService.setUserName(userName);
        this.router.navigate(['/searchloan']);
      }else{
        console.log("Auth not passed");
        this.error=`Your login attempt was not successful. Try again.
        Reason: Invalid Credentials.`
      }
    },err =>{ 
      console.log("Auth not passed:"+err);
        this.error=`Your login attempt was not successful. Try again.
        Reason: Invalid Credentials.`
    });
   
  }
  get f(){
    return this.form.controls;
  }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.form['username'].hasError('required')) {
      return 'You must enter a value';
    }
}
}
