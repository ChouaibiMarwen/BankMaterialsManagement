import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUerComponent } from './login-uer/login-uer.component';
import { HomeComponent } from './home/home.component';
import { AgencyDashboardComponent } from './agency-dashboard/agency-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUerComponent,
    HomeComponent,
    AgencyDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
