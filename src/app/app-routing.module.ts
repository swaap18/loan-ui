import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchLoanComponent } from './search-loan/search-loan.component';
import { LoginComponent } from './login/login.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import {AuthenticationGuard} from './authentication.guard';

const routes: Routes = [
  // {path: '', component: LoginComponent,pathMatch:'full'},
  {path: 'app-search-loan',component: SearchLoanComponent,canActivate:[AuthenticationGuard] ,runGuardsAndResolvers:'always'},
 {path:'addloan',component:AddLoanComponent,canActivate:[AuthenticationGuard] ,runGuardsAndResolvers:"always"},
 {path:'login',component:LoginComponent},
 {path: '', redirectTo: '/login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
