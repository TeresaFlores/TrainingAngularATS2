import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { BoletosComponent } from './boletos/boletos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'alimentos', component: AlimentosComponent},
  {path: 'boletos', component: BoletosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'navegador', component: NavegadorComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
