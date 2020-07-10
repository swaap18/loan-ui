import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../shared/model/user';
import { DatePipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { tap, retry, catchError } from 'rxjs/operators';

const url = 'http://localhost:8088/loanManagementService/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' }),
  responseType: 'text' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private datePipe: DatePipe) {

  }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  
  public getUserByUserName(userName): Observable<any> {
    console.log('calling getUserByName :' + userName);
    return this.http.get<any>(url + 'user/search/findByUserName?name=' + userName, httpOptions).pipe(
      tap(res => console.log("searched User result:"+res),error => console.log('error')),
      //catchError(this.handleError<any>('get UserByName'))
    )
  }
  
  //public getUsers(): Observable<
  public setUserName(id: string) {
    sessionStorage.setItem('username', id);
    this.loggedIn.next(true);
  }
  public getUserName() {
    return sessionStorage.getItem('username');
  }
  public logout() {
    sessionStorage.removeItem('username');
    this.loggedIn.next(false);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<any> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as any);
    };
  }
}