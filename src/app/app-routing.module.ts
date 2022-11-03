import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreeComponent } from './componente/agree/agree.component';
import { BuscarComponent } from './componente/buscar/buscar.component';
import { HomeComponent } from './componente/home/home.component';
import { ModificarComponent } from './componente/modificar/modificar.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'agree', component: AgreeComponent },
  { path: 'modificar/:id', component: ModificarComponent },
  { path: 'buscar/:id', component: BuscarComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
