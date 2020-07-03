import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchLoanComponent } from './components/search-loan/search-loan.component';
import { LoginComponent } from './components/login/login.component';
import { AddLoanComponent } from './components/add-loan/add-loan.component';
import {AuthenticationGuard} from './shared/auth/authentication.guard';
import { ViewLoanComponent } from './components/view-loan/view-loan.component';

const routes: Routes = [
  {path:'searchloan',component: SearchLoanComponent,canActivate:[AuthenticationGuard] ,runGuardsAndResolvers:'always'},
  {path:'addloan',component:AddLoanComponent,canActivate:[AuthenticationGuard] ,runGuardsAndResolvers:"always"},
  { path:'viewLoan', component: ViewLoanComponent, canActivate:[AuthenticationGuard],runGuardsAndResolvers:"always"},
  {path:'login',component:LoginComponent},
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
