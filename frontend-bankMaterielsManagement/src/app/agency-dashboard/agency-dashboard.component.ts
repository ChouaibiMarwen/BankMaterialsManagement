import { Component, OnInit } from '@angular/core';
import { Agence } from '../classes/agence';
import { NgForm } from '@angular/forms';
import { AgenceServiceService } from '../services/agence-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agency-dashboard',
  templateUrl: './agency-dashboard.component.html',
  styleUrls: ['./agency-dashboard.component.css']
})
export class AgencyDashboardComponent implements OnInit {

  agence= new Agence();
  Agences !: Agence[];
 

  constructor(private service : AgenceServiceService, private router : Router) {
    this.getAgencesList();
   }

  ngOnInit(): void {
  }


  createAgence(){
    this.service.createAgence(this.agence).subscribe(
      (resp)=>{
        console.log("agence creer avec succé");
        this.handleClear();
        this.getAgencesList();
      },
       (err) =>{
        console.log("erreur lors de la creation de l'agence");
      }
      )
  }

  handleClear(){
    this.agence.name = ' ';
    this.agence.telephone = ' ';
    this.agence.adress = ' ';
  }

  getAgencesList(){
    this.service.getSubAdmins().subscribe(
      (resp) => {
        console.log(resp);
        this.Agences = resp;
       
      },
      (err) =>{
        console.log(err);
      }
    );

  }

  deleteAgece(ida: number){

    this.service.DeleteKpi(ida).subscribe(
      (resp) => {
        console.log(resp);
        this.getAgencesList();
       
      },
      (err) =>{
        console.log(err);
      }
    );
    
  }

}
