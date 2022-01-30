import { Component, OnInit } from '@angular/core';
import { Agence } from '../classes/agence';
import { AgenceServiceService } from '../services/agence-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  Agences !: Agence[];


  constructor(private service : AgenceServiceService) { 
    this.getAgencesList();
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


}
