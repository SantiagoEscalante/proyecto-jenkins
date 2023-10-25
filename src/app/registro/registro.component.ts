import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  datos:any;
  valorEmail: string = '';
  valorPass: string = '';
  valorConfPass: string = '';
  valorNombre: string = '';
  valorApellido: string = '';
  valorEdad: number = 0;

  constructor(private router: Router , private registroSVC : RegistroService){
     
  }

  registro(){
    //Primero hacemos el llamado al servicio de registro si devuelve ok navegamos al login
    if(this.valorConfPass === this.valorPass){
      const data = {
        nombre: this.valorNombre,
        apellido: this.valorApellido,
        edad: this.valorEdad,
        usuario: this.valorEmail,
        contra: this.valorPass
      };
      this.registroSVC.registro(data).subscribe((response)=>{
        this.datos=response;
        console.log(this.datos);

      })
    }
  }

  volver(){
    this.router.navigate(['/']);
  }

}
