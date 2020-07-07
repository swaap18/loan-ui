import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
     //return this.http.get(url+'loan/search/findByLoanId?loanId='+id);
   }
}
