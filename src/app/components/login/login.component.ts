import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../shared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup=new FormGroup({
  username: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required]),
  });

  error:string;
  constructor(private router:Router, private authService:AuthenticationService) {this.error=""; }

  submit(){
    console.log(this.form.value);
    this.authenticateUser(this.f.username.value,this.f.password.value);
  }
  public authenticateUser(userName,password){
    this.authService.getUserByUserName(userName).subscribe(usr =>{
      let user:User = new User();
      Object.assign(user, JSON.parse(usr));
      console.log("checking for password:"+user.userPassword +"<=>"+password);
          
      if(user.userPassword === password){
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

}
