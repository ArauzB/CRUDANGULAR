import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComunidadesService {

  url = 'http://localhost:8888/comunidad';
  constructor(private http:HttpClient) { }

  getComunidades(){
    return this.http.get(`${this.url}`);
  }

  getComunidad(comunidad:string){
    return this.http.get(`${this.url}/${comunidad}`);
  }

  addComunidad(comunidad:Comunidad){
    return this.http.post(`${this.url}`,comunidad);
  }

  updateComunidad(id:number,comunidad:Comunidad){
    return this.http.put(`${this.url}/${id}`,comunidad);
  }

  deleteComunidad(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }


}

export interface Comunidad{
  codcomunidad?:number;
  comunidad?:string;
  coddepto?:string;
  codmuni?:string;
}
