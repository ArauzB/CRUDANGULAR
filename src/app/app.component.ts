import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComunidadesService,Comunidad } from './services/comunidades.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';


  constructor(private ComunidadesService:ComunidadesService, private router:Router) { }

 

}
