import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchLoanComponent } from './search-loan/search-loan.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'app-search-loan',component: SearchLoanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
