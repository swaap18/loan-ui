import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { MatTableDataSource } from '@angular/material/table'
import { Loan } from '../../shared/model/loan';
import { LoanService } from 'src/app/services/loan.service';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-search-loan',
  templateUrl: './search-loan.component.html',
  styleUrls: ['./search-loan.component.css']
})

export class SearchLoanComponent implements OnInit {
  form: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.minLength(3)]),
    loanId: new FormControl('', [Validators.minLength(3)]),
    loanAmt: new FormControl('', [Validators.minLength(3)])
  });

  displayedColumns: string[] = ['id', 'firstName', 'loanId', 'loanAmt'];
  dataSource = new MatTableDataSource<Loan>();
  loanList: Loan[] = [];
  loan: Loan = new Loan();
  error: string;
 count=0;
  constructor(public router: Router, private loanService: LoanService) {
    // TODO
  }

  ngOnInit(): void {

  }

  submit() {
    console.log("======" + this.form.controls.fullName.value);
    //this.searchLoan(this.form.controls.fullName.value);
    this.getLoanByName(this.form.controls.fullName.value);
    this.loanList = [];
    console.log("in submit "+this.loan);
    this.count++;
    this.loanList.push(this.loan);
    this.dataSource = new MatTableDataSource<Loan>(this.loanList);
    console.log("loanList:" + this.dataSource.data.values)

    //console.log("======FilteredData" + this.dataSource.filteredData);    
  }

  searchLoan(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    //this.getLoanList();

  }

  resetOnClick() {    
    this.dataSource = new MatTableDataSource;
    this.error='';
  }

  getLoanByName(name: string) {
    this.loanService.getLoanByName(name).subscribe(
      jsonLoan => {
        Object.assign(this.loan, JSON.parse(jsonLoan))
        console.log("After Parse::"+ this.loan.id);
        console.log("After Parse::"+ this.loan.loanAmount);
      },
      err => {
        console.log("No data found:" + err);
        this.error = "No data found.";
        this.loanList.pop();
      
      });
  }

  getLoanList() {
    this.loanService.getLoans().subscribe(
      jsonLoanList => {
        console.log("jsonLoanList" + jsonLoanList);
        let array: Loan[] = jsonLoanList.loan.forEach(jsonLoan => {
          var inLoan: Loan = new Loan();
          return Object.assign(inLoan, JSON.parse(jsonLoan));;
        });

        this.loanList = array;
        //Object.assign(this.loanList, JSON.parse(jsonLoanList));
        this.dataSource = new MatTableDataSource<Loan>(this.loanList);
        console.log("Data source::" + this.dataSource)
        console.log("Loan List::" + this.loanList)

      },
      err => {
        console.log("No data found:" + err);
        this.error = `No data found.`
      });

  }
}

/* Static data */
export interface LoanSearchResult {
  id: number;
  firstName: string;
  loanId: string;
  loanAmount: number;
  city: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'John', loan_num: '98989811', loan_amt: 500000.00 },
//   { position: 2, name: 'Smith', loan_num: '2', loan_amt: 500000.00 },
//   { position: 3, name: 'Chris', loan_num: '9898112', loan_amt: 500000.00 },
//   { position: 4, name: 'Joe', loan_num: '9898113', loan_amt: 500000.00 },
//   { position: 5, name: 'Biden', loan_num: '9898114', loan_amt: 500000.00 },
//   { position: 6, name: 'Donald', loan_num: '9898115', loan_amt: 500000.00 },
//   { position: 7, name: 'George', loan_num: '9898116', loan_amt: 500000.00 },
//   { position: 8, name: 'Thamson', loan_num: '9898117', loan_amt: 500000.00 },
//   { position: 9, name: 'Ivanka', loan_num: '9898118', loan_amt: 500000.00 },
//   { position: 10, name: 'Clinton', loan_num: '9898119', loan_amt: 500000.00 },
//   { position: 11, name: 'Tracy', loan_num: '9898119', loan_amt: 500000.00 }
const SEARCH_RESULT: LoanSearchResult[] = [
  { id: 1, firstName: 'John', loanId: '1', loanAmt: 500000.00, city: '' },
  { id: 2, firstName: 'Smith', loanId: '2', loanAmt: 500000.00, city: '' },

];