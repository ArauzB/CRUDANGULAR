import { Component, OnInit } from '@angular/core';
import { ComunidadesService } from '../../services/comunidades.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ComunidadesService:ComunidadesService) { }

  ngOnInit(): void {
    this.listarComunidades();
  }

  listarComunidades(){
    this.ComunidadesService.getComunidades().subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

  



}
