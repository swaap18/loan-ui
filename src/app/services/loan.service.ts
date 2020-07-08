import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Loan } from '../shared/model/loan';

const url = 'http://localhost:8088/loanManagementService/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' }),
  responseType: 'text' as 'json'
};
@Injectable({
  providedIn: 'root'
})
export class LoanService {
 
  constructor(private http: HttpClient) {
     
   }
   public getLoanById(id:number){
     return this.http.get(url+'loan/'+id);
   }

   public getLoanByName(name:string): Observable<any>{
    return this.http.get(url+'loan/search/findByFirstName?firstName='+name,httpOptions).pipe(
      tap(res => console.log(""),error => console.log('error'))
      )
   }

   public getLoans(): Observable<any>{
    return this.http.get(url+'loan',httpOptions).pipe(
      tap(res => console.log(""),error => console.log('error'))
      )
   }
}
