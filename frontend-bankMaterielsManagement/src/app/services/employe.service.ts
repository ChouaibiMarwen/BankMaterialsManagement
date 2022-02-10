import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../classes/employe';
import { Equipement } from '../classes/equipement';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http : HttpClient) { }


  public createEmpl(empl : Employe):Observable<any>{
    return this.http.post<any>("http://localhost:8080/creerEmploy", empl) 
  }

  public getEmplList ():Observable<Employe[]>{
    return this.http.get<Employe[]>("http://localhost:8080/afficheListEmpl")
  }

  public DeleteKpi(idem : number){
    return this.http.delete("http://localhost:8080/deleteEmpl?idem="+ idem)
  }
}
