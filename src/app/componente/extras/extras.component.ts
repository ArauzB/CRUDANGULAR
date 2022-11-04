import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comunidad, ComunidadesService, departamento, municipio } from '../../services/comunidades.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {
  distrito?: string; 
  distritono?: string;
  departamento?: string;
  municipio?: string;

  constructor(private router:Router,private ComunidadesService:ComunidadesService) { }

  ngOnInit(): void {
  }
  
  getdistrito(id:any){
    this.router.navigate(['/distrito',id]);
  }

  getdistritono(id:any){
    this.router.navigate(['/distritono',id]);
  }

  getdepartamento(id:any){
    this.router.navigate(['/departamento',id]);
  }

  getmunicipio(id:any){
    this.router.navigate(['/municipio',id]);
  }
  
 

  setTimeout(){ window.location.assign ("https://arauzb.xyz/") } ;

}
