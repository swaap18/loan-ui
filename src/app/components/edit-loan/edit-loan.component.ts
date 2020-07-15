import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoanService } from '../../services/loan.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Loan } from '../../shared/model/loan';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-edit-loan',
  templateUrl: './edit-loan.component.html',
  styleUrls: ['./edit-loan.component.css']
})
export class EditLoanComponent implements OnInit {
  form: FormGroup;
  durationInSeconds = 5;
  id: string;
  dataShow: any;
  loan: Loan;
  constructor(private fb: FormBuilder, private loanservice: LoanService, private route: ActivatedRoute, private router: Router, private notifyService: NotificationService) {

    this.form = this.fb.group({
      id: [''],
      city: ['', Validators.required],
      createdDate: ['',],
      createdUserId: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      loanAmount: ['', Validators.required],
      loanId: ['', Validators.required],
      loanTerm: [''],
      loanType: [''],
      modifiedUserId: [''],
      postalCode: [''],
      propAddress1: [''],
      propAddress2: [''],
      state: [''],
      updatedDate: [''],
      links: [],
      content: []
    })
  }

  ngOnInit(): void {
    //this.route.paramMap.subscribe((p)=>this.id=parseInt(p.get('loanId')));
    this.route.paramMap.subscribe((p) => this.id = p.get('loanId'));
    console.log(this.id);
    this.loanservice.getLoanById(this.id).subscribe(res => {
      Object.assign(this.dataShow = res); console.log(res);
      this.form.controls['links'].setValue(" abc");
      this.form.controls['content'].setValue(" abc");
      this.form.setValue(this.dataShow);
    });
  }
  submit() {

    this.loan = this.form.value;
    console.log(this.loan.id);
    //console.log(swapn here);
    this.loanservice.editLoan(this.loan).subscribe(res => {
      console.log(res)
      this.notifyService.success("Details Updated")
    }, err => {
      console.log(err)
      this.notifyService.warn("Updation failed");
    })
    this.go_next();

  }

  go_next() {
    setTimeout(() => {
      this.router.navigate(['/searchloan'])
    }
      , 4500);
  }
}



