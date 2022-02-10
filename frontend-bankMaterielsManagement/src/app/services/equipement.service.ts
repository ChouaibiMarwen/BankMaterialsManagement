import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipement } from '../classes/equipement';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  constructor(private http : HttpClient) { }

  public createAgence(equi : Equipement):Observable<any>{
    return this.http.post<any>("http://localhost:8080/ajoutEquipement", equi) 
  }

  public getEquiList ():Observable<Equipement[]>{
    return this.http.get<Equipement[]>("http://localhost:8080/listEquipements")
  }

  public equiNombre(name: String):Observable<any>{
    return this.http.get("http://localhost:8080/nombreEqui?name="+ name)
  }


  public DeleteEquip(ideq : number){
    return this.http.delete("http://localhost:8080/suppEquip?ideq="+ ideq)
  }


  public fetchEquiList (name: String):Observable<Equipement[]>{
    return this.http.get<Equipement[]>("http://localhost:8080/findEquiByName?name="+ name)
  }

 
}
