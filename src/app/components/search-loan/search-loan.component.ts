import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { MatTableDataSource } from '@angular/material/table'
import { Loan } from '../../shared/model/loan';
import { LoanService } from '../../services/loan.service';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { resource } from '../../shared/model/resource';
import { LoanContent } from '../../shared/model/LoanContent';

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

  displayedColumns: string[] = ['loanId','firstName', 'city', 'loanAmt'];
  dataSource = new MatTableDataSource<Loan>();
  loanList: Loan[] = [];
  loan: Loan = new Loan();
  error: string;
  loanElements:LoanContent[]=[];
 count=0;
 v1:string;
 v2:string
 v3:number;
  constructor(public router: Router, private loanService: LoanService) {
    // TODO
  }

  ngOnInit(): void {
    this.loanElements=[];
    this.loanService.getLoans().subscribe(
      jsonLoanList => {
        var res:resource=new resource();
         //console.log("jsonLoanList" + jsonLoanList);
         Object.assign(res,JSON.parse(jsonLoanList));
        // console.log("res"+res.content);
        //Populate value to array
         for(var value of res.content){
           // console.log(value);
            var Li:LoanContent=new LoanContent;
            Object.assign(Li,value);
            console.log(Li.firstName);
            this.loanElements.push(Li);
         }
         console.log("eelmts"+this.loanElements)
         console.log("swapn here")
        }, err => {
          console.log("No data found:" + err);
          this.error = `No Results found.`
        });

  }

  submit() {
    console.log("======" + this.form.controls.fullName.value);
    //this.searchLoan(this.form.controls.fullName.value);
    //this.getLoanByName(this.form.controls.fullName.value);
    this.v1=this.form.controls.fullName.value;
    this.v2=this.form.controls.loanId.value;
    this.v3=this.form.controls.loanAmt.value;
    this.loanList = [];
    console.log("in submit "+this.loan);
    this.count++;
    this.loanList.push(this.loan);
    this.dataSource = new MatTableDataSource<Loan>(this.loanList);
    console.log("loanList:" + this.dataSource.data.values)
    this.error=null;
    this.getLoanList();
    //this.loanElements=[];
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
        this.error = "No Results found";
        this.loanList.pop();
      
      });
  }

  getLoanList() {
        var loanElements2:LoanContent[]=[];
        console.log("V1"+this.v1+"V2"+this.v2+"V3"+this.v3);
        // loanElements2=this.loanElements.filter(res=>{ console.log('here');
        //  if( this.v1 ){ res.firstName.toLowerCase()===this.v1.toLowerCase();} console.log(res.firstName+" "+this.v1)}).
        //   filter( res=>{if(this.v2) res.loanId===this.v2}).
        //   filter(res=>{if(this.v3) res.loanAmount===this.v3});
        var flag=0;
        loanElements2=this.loanElements;
        if(this.v1)
        {flag=1;
        loanElements2=this.loanElements.filter(res=>res.firstName.toLowerCase()===this.v1.toLowerCase());}
        if(this.v2){ flag=1;
        loanElements2=loanElements2.filter(res=>res.loanId.toLowerCase()===this.v2.toLowerCase())}
        if(this.v3>0){flag=1;
        loanElements2=loanElements2.filter(res=>res.loanAmount==this.v3)}
          console.log("after filter "+loanElements2);
          //console.log("swapn")
          if(flag==0) loanElements2=[];
    if(loanElements2.length==0)
    this.error="No Results found"
        this.dataSource = new MatTableDataSource<LoanContent>(loanElements2);
        //console.log("Data source::" + this.dataSource)
        //console.log("Loan List::" + this.loanList)

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
  { id: 1, firstName: 'John', loanId: '1', loanAmount: 500000.00, city: '' },
  { id: 2, firstName: 'Smith', loanId: '2', loanAmount: 500000.00, city: '' },

];