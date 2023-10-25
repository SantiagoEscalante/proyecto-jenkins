import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AboutComponent } from './about/about.component';
import { OlvidecontraComponent } from './olvidecontra/olvidecontra.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registrarse', component: RegistroComponent},
  {path: 'acerca', component: AboutComponent},
  {path: 'olvide', component: OlvidecontraComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
