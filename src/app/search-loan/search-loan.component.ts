import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-search-loan',
  templateUrl: './search-loan.component.html',
  styleUrls: ['./search-loan.component.css']
})
export class SearchLoanComponent implements OnInit {
  form:FormGroup=new FormGroup({
    username: new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    });

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log("");
    //console.log(this.f.username.value);
    //console.log(this.form.controls.password.value);
    //console.log(this.form.value);
    //this.router.navigate(['searchloan']);

  }
}
