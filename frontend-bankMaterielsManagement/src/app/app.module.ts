import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUerComponent } from './login-uer/login-uer.component';
import { HomeComponent } from './home/home.component';
import { AgencyDashboardComponent } from './agency-dashboard/agency-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { EquipementComponentComponent } from './equipement-component/equipement-component.component';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUerComponent,
    HomeComponent,
    HeaderComponent,
    AgencyDashboardComponent,
    EquipementComponentComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
