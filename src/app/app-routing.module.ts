import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreeComponent } from './componente/agree/agree.component';
import { BuscarComponent } from './componente/buscar/buscar.component';
import { DepartamentoComponent } from './componente/departamento/departamento.component';
import { DistritoComponent } from './componente/distrito/distrito.component';
import { DistritonoComponent } from './componente/distritono/distritono.component';
import { ExtrasComponent } from './componente/extras/extras.component';
import { HomeComponent } from './componente/home/home.component';
import { ModificarComponent } from './componente/modificar/modificar.component';
import { MunicipioComponent } from './componente/municipio/municipio.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'agree', component: AgreeComponent },
  { path: 'modificar/:id', component: ModificarComponent },
  { path: 'buscar/:id', component: BuscarComponent},
  { path: 'distrito/:id', component: DistritoComponent},
  { path: 'distritono/:id', component: DistritonoComponent},
  { path: 'departamento/:id', component: DepartamentoComponent},
  { path: 'municipio/:id', component: MunicipioComponent},
  { path: 'extras', component: ExtrasComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
