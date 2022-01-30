import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agence } from '../classes/agence';

@Injectable({
  providedIn: 'root'
})
export class AgenceServiceService {

  constructor(private _http : HttpClient) { }


  public createAgence(agence : Agence):Observable<any>{
    return this._http.post<any>("http://localhost:8080/ajoutAgence", agence) 
  }
}
