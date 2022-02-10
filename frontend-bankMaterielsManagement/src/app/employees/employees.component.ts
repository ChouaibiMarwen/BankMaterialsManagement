import { Component, OnInit } from '@angular/core';
import { Agence } from '../classes/agence';
import { Employe } from '../classes/employe';
import { Equipement } from '../classes/equipement';
import { AgenceServiceService } from '../services/agence-service.service';
import { EmployeService } from '../services/employe.service';
import { EquipementService } from '../services/equipement.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  idscanner !: number;


  empl = new Employe();
  Agences !: Agence[];
  Claviers !: Equipement[];
  Scanners!: Equipement[];
  Impres !: Equipement[];
  UnitesC !: Equipement[];
  Empls !: Employe[];

  constructor(private service : AgenceServiceService, private serviceEqui : EquipementService, private serviceEmpl : EmployeService ) { 
    this.getEmlList();
    this.getAgencesList();
    this.fetchClavierByName();
    this.fetchImpreByName();
    this.fetchUnitéCenByName();
    this.fetchScannerByName();
    
  }

  ngOnInit(): void {
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

  fetchClavierByName(){

    this.serviceEqui.fetchEquiList("clavier").subscribe(
      (resp) => {
        console.log(resp);
        this.Claviers = resp;
       
      },
      (err) =>{
        console.log(err);
      }
    )
  }

  fetchUnitéCenByName(){

    this.serviceEqui.fetchEquiList("uniteCentrale").subscribe(
      (resp) => {
        console.log(resp);
        this.UnitesC = resp;
      },
      (err) =>{
        console.log(err);
      }
    )
  }
  fetchScannerByName(){

    this.serviceEqui.fetchEquiList("scanner").subscribe(
      (resp) => {
        console.log(resp);
        this.Scanners = resp;
      },
      (err) =>{
        console.log(err);
      }
    )
  }
  fetchImpreByName(){

    this.serviceEqui.fetchEquiList("Imprimante").subscribe(
      (resp) => {
        console.log(resp);
        this.Impres = resp;
      },
      (err) =>{
        console.log(err);
      }
    )
  }
  refresh():void{
    window.location.reload();
  }
  creaateEmpl(){

    this.serviceEmpl.createEmpl(this.empl).subscribe(
      (resp)=>{
        console.log("empl creer avec succé"); 
        this.refresh();
      },
       (err) =>{
        console.log("erreur lors de la creation de l'agence");
      }
      )
  }

  getEmlList(){
    this.serviceEmpl.getEmplList().subscribe(
      (resp) => {
        console.log(resp);
        this.Empls = resp;
      },
      (err) =>{
        console.log(err);
      }
    )
  }


  deletEmp(idemp: number){
    this.serviceEmpl.DeleteKpi(idemp).subscribe(
      (resp) => {
        console.log(resp);
        this.getEmlList();
      },
      (err) =>{
        console.log(err);
      }
    )
  }

}
