import { Component, OnInit } from '@angular/core';
import { Comunidad, ComunidadesService } from '../../services/comunidades.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

 
  ListarComunidades?: Comunidad[];


  constructor(private ComunidadesService:ComunidadesService, private router:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {

    const comunidada = <string>this.active.snapshot.params['id'];
    console.log(comunidada);

    this.listarComunidades();
  }
  
  comunidadbusqueda = <string>this.active.snapshot.params['id'];
  
  listarComunidades(){
    this.ComunidadesService.buscarComunidad(this.comunidadbusqueda).subscribe(
      //res array
      (res:any) => {
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


}
