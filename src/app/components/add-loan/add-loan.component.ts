import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Loan} from '../../shared/model/loan'
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  form:FormGroup;
  durationInSeconds=5;
  loan:Loan;
  constructor(private fb:FormBuilder,private _snackBar: MatSnackBar,private loanService:LoanService) {
    this.form = this.fb.group({
      city: ['', Validators.required],
      createdDate: ['', Validators.required],
      createdUserId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      loanAmount: ['', Validators.required],
      loanId: ['', Validators.required],
      loanTerm: ['', Validators.required],
      loanType: ['', Validators.required],
      modifiedUserId:['', Validators.required],
      postalCode: ['', Validators.required],
      propAddress1: ['', Validators.required],
      propAddress2: ['', Validators.required],
      state:['', Validators.required],
      updatedDate: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form.controls.firstName.value);
    this.loan=this.form.value;
    console.log(this.loan);
    // this.loan.modifiedUserId='swap';
    // this.loan.createdUserId="swap";
    console.log(this.loan);
    this.loanService.addLoan(this.loan).subscribe(res=>console.log(res),err=>console.log(err));
   

    // console.log(this.form.controls.userFirstName.value);
    // console.log(this.form.controls.address.value);
    // console.log(this.form.controls.legaldocs.value);
  }

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  this.loan=this.form.value;
  console.log(this.loan);
  }
}


@Component({
  selector: 'snack-bar-component-example-snack',
  template:'<span class="example-pizza-party"> Successfully Submitted  </span>',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}