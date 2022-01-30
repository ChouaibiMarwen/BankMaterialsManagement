import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';
import { Equipement } from '../classes/equipement';
import { NgForm } from '@angular/forms';
import { EquipementService } from '../services/equipement.service';




@Component({
  selector: 'app-equipement-component',
  templateUrl: './equipement-component.component.html',
  styleUrls: ['./equipement-component.component.css']
})
export class EquipementComponentComponent implements OnInit {
  equi = new Equipement();
  Equips !:Equipement[];
  nombreScanner !: Number;
  nombreClavier !: Number;
  nombreImprem !: Number;
  nombreUniteCen !: Number;

  d = new Date();
  nombre !: number;
  dformat = [this.d.getDate(),
    this.d.getMonth()+1 ,
     this.d.getFullYear()].join('/')+' '+
    [this.d.getHours(),
     this.d.getMinutes(),
     this.d.getSeconds()].join(':');

  constructor(config: NgbModalConfig, private modalService: NgbModal, private service : EquipementService) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.getAgencesList();
    this.getnumbreScanner();
    this.getnumbreImpre();
    this.getnumbreUniteC();
    this.getnumbreClavier();
   }

  ngOnInit(): void {
  }

  open(addEquipmenrt:any) {
    this.modalService.open(addEquipmenrt);
  }

  addEqui(){
    this.equi.dateAjout = this.dformat;
    this.equi.used = false;
    for (let index = 0; index < this.nombre; index++) {
      this.service.createAgence(this.equi).subscribe(
        (resp)=>{
          console.log("equipement creer avec succé");
          
        },
         (err) =>{
          console.log("erreur lors de la creation de l'equipement");
        }
        )
      
    }
    
  }

  getAgencesList(){
    this.service.getEquiList().subscribe( 
      (resp) => {
      console.log(resp);
      this.Equips = resp;
     
    },
    (err) =>{
      console.log(err);
    }
  );
    
  }


  getnumbreScanner(){
    this.service.equiNombre("scanner").subscribe( (resp) => {
      console.log(resp);
      this.nombreScanner = resp;
     
    },
    (err) =>{
      console.log(err);
    })
  }

  

  getnumbreClavier(){
    this.service.equiNombre("clavier").subscribe( (resp) => {
      console.log(resp);
      this.nombreClavier = resp;
     
    },
    (err) =>{
      console.log(err);
    })
  }
  getnumbreImpre(){
    this.service.equiNombre("imprimante").subscribe( (resp) => {
      console.log(resp);
      this.nombreImprem = resp;
     
    },
    (err) =>{
      console.log(err);
    })
  }
  getnumbreUniteC(){
    this.service.equiNombre("unite centrale").subscribe( (resp) => {
      console.log(resp);
      this.nombreUniteCen= resp;
     
    },
    (err) =>{
      console.log(err);
    })
  }
}
