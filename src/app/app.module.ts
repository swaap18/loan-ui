import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SearchLoanComponent } from './components/search-loan/search-loan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { AddLoanComponent } from './components/add-loan/add-loan.component';
import { ViewLoanComponent } from './components/view-loan/view-loan.component';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './shared/auth/authentication.guard';
import { EditLoanComponent } from './components/edit-loan/edit-loan.component';
import { DatePipe, CommonModule } from '@angular/common';


const appRoutes: Routes = [
  { path: 'searchloan', component: SearchLoanComponent, canActivate: [AuthenticationGuard] },
  { path: 'viewLoan', component: ViewLoanComponent }
  // {path:'login',component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchLoanComponent,
    AddLoanComponent,
    ViewLoanComponent,
    EditLoanComponent
  ],
  entryComponents: [ViewLoanComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [AuthenticationService,DatePipe],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
