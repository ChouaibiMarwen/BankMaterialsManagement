import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../classes/admin';
import { LoginUserService } from '../services/login-user.service';

@Component({
  selector: 'app-login-uer',
  templateUrl: './login-uer.component.html',
  styleUrls: ['./login-uer.component.css']
})
export class LoginUerComponent implements OnInit {

  admin = new Admin();

  constructor(private service : LoginUserService, private router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.service.loginUser(this.admin).subscribe(
      data=>{
        console.log("avec succé");
        this.router.navigate(['/home']);
      },
      err =>{
        console.log("exception trouvé")
      }
    )
 
  }
}
