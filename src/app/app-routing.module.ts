import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AboutComponent } from './about/about.component';
import { OlvidecontraComponent } from './olvidecontra/olvidecontra.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registrarse', component: RegistroComponent},
  {path: 'acerca', component: AboutComponent},
  {path: 'olvide', component: OlvidecontraComponent},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
