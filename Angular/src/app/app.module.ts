import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertModule} from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatSelectModule} from "@angular/material";
import {MatButtonModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
