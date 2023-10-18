import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  datos:any;
  valorEmail: string = '';
  valorPass: String = '' ;
  constructor(private servicio: LoginService) {

  }
  login(){
    const inputpass = document.getElementById('pass');

    const data = {
      usuario: this.valorEmail,
      contra: this.valorPass
    };

    this.servicio.login(data).subscribe((response)=>{
      this.datos=response;
      
    })
  }
}
