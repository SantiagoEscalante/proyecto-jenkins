import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  datos:any;
  valorEmail: string = '';
  valorPass: String = '' ;
  constructor(private servicio: LoginService , private router : Router) {

  }
  login(){

    const data = {
      usuario: this.valorEmail,
      contra: this.valorPass
    };

    this.servicio.login(data).subscribe((response)=>{
      this.datos=response;
      console.log(this.datos);
      if(this.datos.status === 'success'){
        this.router.navigate(['/home']);
      }      
    })
  }

  registrarse(){
    this.router.navigate(['/registrarse'])
  }
}
