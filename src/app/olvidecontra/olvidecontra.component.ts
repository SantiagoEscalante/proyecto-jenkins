import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olvidecontra',
  templateUrl: './olvidecontra.component.html',
  styleUrls: ['./olvidecontra.component.css']
})
export class OlvidecontraComponent {
  valorEmail: any = ''; 
  constructor(private router: Router){

  }
 
  recuperar(){

 }

 volver(){
  this.router.navigate(['']);
 }
}
