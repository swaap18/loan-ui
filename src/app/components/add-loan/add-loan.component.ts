import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  form:FormGroup;
  durationInSeconds=5;
  constructor(private fb:FormBuilder,private _snackBar: MatSnackBar) {
    this.form=this.fb.group({
      userFirstName: ['',Validators.required],
      userLastName:['',Validators.required],
      address:this.fb.group({
        addressLine1:['',Validators.required],
        addressLine2:['',Validators.required],
        city:['',Validators.required],
        zipcode:['',Validators.required]
      }),
      loanAmount:['',Validators.required],
      loanTerm:['',Validators.required],
      loanId:['',Validators.required],
      loanType:['',Validators.required],
      legaldocs:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form.controls.userFirstName.value);

    console.log(this.form.controls.userFirstName.value);
    console.log(this.form.controls.address.value);
    console.log(this.form.controls.legaldocs.value);
  }

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
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