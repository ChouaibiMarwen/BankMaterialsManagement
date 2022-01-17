import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../classes/admin';

@Injectable({
  providedIn: 'root'
})  
export class LoginUserService {

  constructor(private _http : HttpClient) { }
  
  public loginUser(admin: Admin):Observable<any>{
    return this._http.post<any>("http://localhost:8080/loginUser",admin) 
  }

  public registerAdmin(user: Admin):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registerAdmin", user);
  }

}
