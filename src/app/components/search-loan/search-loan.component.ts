import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { MatSort } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'

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

  displayedColumns: string[] = ['position', 'name', 'loan_num', 'loan_amt'];
  dataSource = new MatTableDataSource;

  constructor(public router: Router) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort;
  }

  submit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    console.log("======" + this.form.controls.fullName.value);
    this.searchLoan(this.form.controls.fullName.value);
    //console.log("======FilteredData" + this.dataSource.filteredData);    
  }

  searchLoan(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  resetOnClick() {
    this.dataSource = new MatTableDataSource;
  }

}

/* Static data */
export interface PeriodicElement {
  position: number;
  name: string;
  loan_num: string;
  loan_amt: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'John', loan_num: '9898110', loan_amt: 500000.00 },
  { position: 2, name: 'Smith', loan_num: '9898111', loan_amt: 500000.00 },
  { position: 3, name: 'Chris', loan_num: '9898112', loan_amt: 500000.00 },
  { position: 4, name: 'Joe', loan_num: '9898113', loan_amt: 500000.00 },
  { position: 5, name: 'Biden', loan_num: '9898114', loan_amt: 500000.00 },
  { position: 6, name: 'Donald', loan_num: '9898115', loan_amt: 500000.00 },
  { position: 7, name: 'George', loan_num: '9898116', loan_amt: 500000.00 },
  { position: 8, name: 'Thamson', loan_num: '9898117', loan_amt: 500000.00 },
  { position: 9, name: 'Ivanka', loan_num: '9898118', loan_amt: 500000.00 },
  { position: 10, name: 'Clinton', loan_num: '9898119', loan_amt: 500000.00 },
  { position: 11, name: 'Tracy', loan_num: '9898119', loan_amt: 500000.00 }
];