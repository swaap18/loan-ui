import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoanService } from '../../services/loan.service';
import { Router } from '@angular/router';
//import { SnackComponent } from '../../shared/SnackComponent.component';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder,private loanService:LoanService,private router:Router,private notificationServ :NotificationService) {
    this.form = this.fb.group({
      city: ['', Validators.required],
      createdDate: [''],
      createdUserId: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      loanAmount: ['', Validators.required],
      loanId: ['', Validators.required],
      loanTerm: [''],
      loanType: [''],
      modifiedUserId:[''],
      postalCode: [''],
      propAddress1: [''],
      propAddress2: [''],
      state:[''],
      updatedDate: ['']
    })
   }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form.controls.firstName.value);
    this.loanService.addLoan(this.form.value).subscribe(res=>{
      console.log(res)
      this.notificationServ.success('Adding Loan Submitted Successfully.');
      this.go_next();
    },
    err=>{
      console.log(err);
      this.notificationServ.warn('Adding Loan got failled.');
    });
  
  }

  go_next(){
    setTimeout(() => {
        this.router.navigate(['/searchloan'])
      }
      , 5000);
  }
}