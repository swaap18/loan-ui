import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {LoanService} from '../../services/loan.service';
import { Router, ActivatedRoute,ParamMap } from '@angular/router'
@Component({
  selector: 'app-edit-loan',
  templateUrl: './edit-loan.component.html',
  styleUrls: ['./edit-loan.component.css']
})
export class EditLoanComponent implements OnInit {
  form: FormGroup;
  durationInSeconds = 5;
  id:number;
  dataShow:any;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,private loanservice:LoanService,private route:ActivatedRoute) {
  
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
      updatedDate: ['', Validators.required],
      _links:[]
      // borrower_fname: ['', Validators.required],
      // borrower_lname: ['', Validators.required],
      // // address: this.fb.group({
      // //   addressLine1: ['', Validators.required],
      // //   addressLine2: ['', Validators.required],
      // //   city: ['', Validators.required],
      // //   zipcode: ['', Validators.required]
      // // }),
      // property_addr1:['', Validators.required],
      // property_addr2:['', Validators.required],
      // city:['', Validators.required],
      // state:['', Validators.required],
      // postal_code:['', Validators.required],
      // loan_amt: ['', Validators.required],
      // loan_term: ['', Validators.required],
      // loan_id: ['', Validators.required],
      // loan_type: ['', Validators.required],
      // loan_create_date :['', Validators.required],
      // loan_update_date  : ['', Validators.required],
      // created_user_id :['', Validators.required],
      // updated_user_id :['', Validators.required],
    })
  }
//emp=[{name:"raj", id:"9898110"},{name:"saj", id:"09112"}];
// dataShow:any;
// constructor(private route:ActivatedRoute,private fb:FormBuilder){
// this.form=this.fb.group({
//   name:[''],
//   id:['']
// }
//this.form=this.fdesc
// )
// }
ngOnInit():void{
  //this.route.paramMap.subscribe((p)=>this.id=parseInt(p.get('loanId')));
  this.route.paramMap.subscribe((p)=>this.id=parseInt(p.get('loanId')));
  console.log(this.id);
  // this.emp.forEach((ele)=> {if(ele.id===this.id)this.dataShow=ele});
  // console.log(this.dataShow);
  // console.log(this.form.controls.name.value);
  // this.form.setValue(this.dataShow);
  this.loanservice.getLoanById(this.id).subscribe(res=>{ Object.assign(this.dataShow=res);console.log(res);this.form.setValue(this.dataShow);});
  //this.form=this.dataShow;
  // console.log(this.dataShow);
  // //this.form.setValue("city",)
  // this.form.setValue(this.dataShow);
  // console.log(this.form.controls.borrower_fname.value)

}
submit(){
  console.log(this.form.controls.name.value);
  console.log(this.form.controls.id.value);
}
openSnackBar() {
  this._snackBar.openFromComponent(PizzaPartyComponent, {
    duration: this.durationInSeconds * 1000,
  });
}
}




@Component({
  selector: 'snack-bar-component-example-snack',
  template: '<span class="example-pizza-party"> Successfully Submitted  </span>',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent { }

