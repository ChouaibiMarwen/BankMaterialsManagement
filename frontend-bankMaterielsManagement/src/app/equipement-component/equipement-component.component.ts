import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-equipement-component',
  templateUrl: './equipement-component.component.html',
  styleUrls: ['./equipement-component.component.css']
})
export class EquipementComponentComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal,) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
  }

  open(addEquipmenrt:any) {
    this.modalService.open(addEquipmenrt);
  }
}
