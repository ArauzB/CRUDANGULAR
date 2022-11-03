import { OnInit } from '@angular/core';
import { Comunidad, ComunidadesService } from '../../services/comunidades.service';
import { ModificarComponent } from '../modificar/modificar.component';
import { Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comunidad?: string;
    
  ListarComunidades?: Comunidad[];

  constructor(private ComunidadesService:ComunidadesService, private router:Router) { }

  ngOnInit(): void {
    this.listarComunidades();
  }

  listarComunidades(){
    this.ComunidadesService.getComunidades().subscribe(
      res => {
        console.log(res);
        this.ListarComunidades =<any>res;
      },
      err => console.log(err)
    );
  }

  eliminarComunidad(id:any){
    var opcion = confirm("¿Está seguro de eliminar la comunidad?");
    if(opcion == true){
    this.ComunidadesService.deleteComunidad(id).subscribe(
      res => {

        console.log(res);
        this.listarComunidades();
      },
      err => console.log(err)
    );

    }else{

    }
   
    }


    updateComunidad(id:any){
      this.router.navigate(['/modificar',id]);
    }


    buscarComunidad(id:any){
      this.router.navigate(['/buscar',id]);
    }

      }




  
      

    

  







