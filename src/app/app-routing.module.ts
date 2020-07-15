import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchLoanComponent } from './components/search-loan/search-loan.component';
import { LoginComponent } from './components/login/login.component';
import { AddLoanComponent } from './components/add-loan/add-loan.component';
import { AuthenticationGuard } from './shared/auth/authentication.guard';
import { EditLoanComponent } from './components/edit-loan/edit-loan.component';

export const routes: Routes = [
  { path: 'searchloan', component: SearchLoanComponent, canActivate: [AuthenticationGuard] },
  { path: 'addloan', component: AddLoanComponent, canActivate: [AuthenticationGuard] },
  { path: 'editloan/:loanId', component: EditLoanComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
