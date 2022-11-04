import { Component, OnInit } from '@angular/core';
import { Comunidad, ComunidadesService } from '../../services/comunidades.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-distritono',
  templateUrl: './distritono.component.html',
  styleUrls: ['./distritono.component.css']
})
export class DistritonoComponent implements OnInit {

  ListarComunidades?: Comunidad[];


  constructor(private ComunidadesService:ComunidadesService, private router:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {

    const comunidada = <string>this.active.snapshot.params['id'];
    console.log(comunidada);

    this.listarComunidades();
  }
  
  iddistrito = <string>this.active.snapshot.params['id'];
  
  listarComunidades(){
    this.ComunidadesService.nodistrito(this.iddistrito).subscribe(
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
