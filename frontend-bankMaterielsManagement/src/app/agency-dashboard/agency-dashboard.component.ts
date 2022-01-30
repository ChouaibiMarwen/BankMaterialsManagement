import { Component, OnInit } from '@angular/core';
import { Agence } from '../classes/agence';
import { NgForm } from '@angular/forms';
import { AgenceServiceService } from '../services/agence-service.service';

@Component({
  selector: 'app-agency-dashboard',
  templateUrl: './agency-dashboard.component.html',
  styleUrls: ['./agency-dashboard.component.css']
})
export class AgencyDashboardComponent implements OnInit {

  agence= new Agence();

  constructor(private service : AgenceServiceService) { }

  ngOnInit(): void {
  }


  createAgence(){
    this.service.createAgence(this.agence).subscribe(
      (resp)=>{
        console.log("agence creer avec succé");
      },
       (err) =>{
        console.log("erreur lors de la creation de l'agence");
      }
      )
  }

}
