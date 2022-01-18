import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyDashboardComponent } from './agency-dashboard/agency-dashboard.component';
import { EquipementComponentComponent } from './equipement-component/equipement-component.component';
import { HomeComponent } from './home/home.component';
import { LoginUerComponent } from './login-uer/login-uer.component';

const routes: Routes = [
  {path:'', component: LoginUerComponent},
 { path:'loginUser', component: LoginUerComponent},
 {path: 'home' , component: HomeComponent},
 {path: 'agencies', component: AgencyDashboardComponent},
 {path: 'equipement', component: EquipementComponentComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
