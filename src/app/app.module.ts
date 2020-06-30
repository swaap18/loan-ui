import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchLoanComponent } from './search-loan/search-loan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {RouterModule, Routes} from '@angular/router';

const appRoutes:Routes=[
  {path: 'searchloan',component: SearchLoanComponent},
  {path:'login',component:LoginComponent}
];
=======
// Material Modules
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

import {FormsModule} from '@angular/forms';



>>>>>>> d1975bf91688b0020c2aaf32357ec957bb87e8cc

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)
=======
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    FormsModule
>>>>>>> d1975bf91688b0020c2aaf32357ec957bb87e8cc
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
