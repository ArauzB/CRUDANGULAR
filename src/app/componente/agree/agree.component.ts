import { Component, OnInit } from '@angular/core';
import { Comunidad, ComunidadesService } from '../../services/comunidades.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agree',
  templateUrl: './agree.component.html',
  styleUrls: ['./agree.component.css']
})
export class AgreeComponent implements OnInit {

  comunidad:Comunidad = {
    comunidad:'',
    coddepto:'',
    codmuni:''
  };

  constructor(private ComunidadServise:ComunidadesService, private router:Router) { }

  ngOnInit(): void {
  }

  agregarComunidad(){

    this.ComunidadServise.addComunidad(this.comunidad).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    );
  };
   
















  }







