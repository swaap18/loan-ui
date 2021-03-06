import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Loan } from '../shared/model/loan';
import { environment } from '../../environments/environment';

const url = environment.API_URL;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' }),
  responseType: 'text' as 'json'
};
@Injectable({
  providedIn: 'root'
})
export class LoanService {
  uri=url;
  httpOp=httpOptions;
  constructor(private http: HttpClient) {
     
   }
   public getLoanById(id:string){
    return this.http.get(url+'loan/search/findByLoanId?loanId='+id);
   }

   public getLoans(): Observable<any>{
    return this.http.get(url+'loan?page=0&size=1000',httpOptions).pipe(
      tap(res => console.log(""),error => console.log('error'))
      )
   }
   public addLoan(loan:Loan){
     return this.http.post(url+'loan',loan);
   }
   public editLoan(loan:Loan){
     return this.http.post(url+'loan',loan);
   }
}
