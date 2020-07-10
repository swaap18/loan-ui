import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {LoanService} from '../../services/loan.service';
import { Router, ActivatedRoute,ParamMap } from '@angular/router'
import { Loan } from '../../shared/model/loan';
@Component({
  selector: 'app-edit-loan',
  templateUrl: './edit-loan.component.html',
  styleUrls: ['./edit-loan.component.css']
})
export class EditLoanComponent implements OnInit {
  form: FormGroup;
  durationInSeconds = 5;
  id:string;
  dataShow:any;
  loan:Loan;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,private loanservice:LoanService,private route:ActivatedRoute,private router:Router) {
  
    this.form = this.fb.group({
      id: ['', Validators.required],
      city: ['', Validators.required],
      createdDate: ['', ],
      createdUserId: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      loanAmount: ['', Validators.required],
      loanId: ['', Validators.required],
      loanTerm: ['', Validators.required],
      loanType: [''],
      modifiedUserId:[''],
      postalCode: ['', Validators.required],
      propAddress1: ['', Validators.required],
      propAddress2: [''],
      state:[''],
      updatedDate: [''],
      links:[],
      content:[]
         })
  }
//emp=[{name:"raj", id:"9898110"},{name:"saj", id:"09112"}];
// dataShow:any;
// constructor(private route:ActivatedRoute,private fb:FormBuilder){
// this.form=this.fb.group({
//   name:[''],
//   id:['']g
// }
//this.form=this.fdesc
// )
// }
ngOnInit():void{
  //this.route.paramMap.subscribe((p)=>this.id=parseInt(p.get('loanId')));
  this.route.paramMap.subscribe((p)=>this.id=p.get('loanId'));
  console.log(this.id);
  // this.emp.forEach((ele)=> {if(ele.id===this.id)this.dataShow=ele});
  // console.log(this.dataShow);
  // console.log(this.form.controls.name.value);
  // this.form.setValue(this.dataShow);
  this.loanservice.getLoanById(this.id).subscribe(res=>{ Object.assign(this.dataShow=res);console.log(res);
    this.form.controls['links'].setValue(" abc");
    this.form.controls['content'].setValue(" abc");
    this.form.setValue(this.dataShow);});
  //this.form=this.dataShow;
  // console.log(this.dataShow);
  // //this.form.setValue("city",)
  // this.form.setValue(this.dataShow);
  // console.log(this.form.controls.borrower_fname.value)

}
submit(){
  
  this.loan=this.form.value;
  console.log(this.loan.id);
  // this.loan.firstName=this.form.controls.firstName.value;
  // this.loan.lastName=this.form.controls.lastName.value;
  // this.loan.propAddress1=this.form.controls.propAddress1.value;
  // this.loan.propAddress2=this.form.controls.propAddress2.value;
  // this.loan.city=this.form.controls.city.value;
  // this.loan.state=this.form.controls.state.value;
  // this.loan.postalCode=this.form.controls.postalCode.value;
  // this.loan.loanId=this.form.controls.loanId.value;
  // this.loan.loanTerm=this.form.controls.loanTerm.value;
  // this.loan.loanType=this.form.controls.loanType.value;
  // this.loan.loanAmount=this.form.controls.loanAmount.value;
  // this.loan.createdDate=this.form.controls.createdDate.value;
  // this.loan.createdUserId=this.form.controls.createdUserId.value;
  // this.loan.modifiedUserId=this.form.controls.modifiedUserId.value;
  //console.log(swapn here);
  this.loanservice.editLoan(this.loan).subscribe(res=>{console.log(res)},err=>console.log(err));
}
openSnackBar() {
  this._snackBar.openFromComponent(PizzaPartyComponent, {
    duration: this.durationInSeconds * 1000,
  });
  //setInterval(this.router.navigate(['/searchloan']),3000)
  this.go_next();
}
go_next(){
  setTimeout(() => {
      this.router.navigate(['/searchloan'])
    }
    , 5000);
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

