import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyDashboardComponent } from './agency-dashboard/agency-dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginUerComponent } from './login-uer/login-uer.component';

const routes: Routes = [
 { path:'loginUser', component: LoginUerComponent},
 {path: 'home' , component: HomeComponent},
 {path: 'agencies', component: AgencyDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
