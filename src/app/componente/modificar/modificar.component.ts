import { Component, OnInit } from '@angular/core';
import { Comunidad, ComunidadesService } from '../../services/comunidades.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  comunidad:Comunidad = {
    codcomunidad:0,
    comunidad:'',
    coddepto:'',
    codmuni:''
  };

  constructor(private ComunidadServise:ComunidadesService, private router:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {
    const codcomunidad = <string>this.active.snapshot.params['id'];
    console.log(codcomunidad);

    if(codcomunidad){
      this.ComunidadServise.getComunidad(codcomunidad).subscribe(
        //res array
        (res:any) => {
          this.comunidad = res[0];
          console.log(this.comunidad);
        },
        err => console.log(err)
      );

    }
  }
  

  editarComunidad(){
    this.ComunidadServise.updateComunidad(this.comunidad.codcomunidad,this.comunidad).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/comunidades']);
      },
      err => console.log(err)
    );
  }
}
