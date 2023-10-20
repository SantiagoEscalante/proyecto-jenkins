import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  valorEmail: string = '';
  valorPass: string = '';
  valorConfPass: string = '';
  valorNombre: string = '';
  valorApellido: string = '';
  valorEdad: number = 0;

  constructor(private router: Router){
     
  }

  registro(){

    //Primero hacemos el llamado al servicio de registro si devuelve ok navegamos al login
    this.router.navigate(['/']);
  }

  volver(){
    this.router.navigate(['/']);
  }

}
