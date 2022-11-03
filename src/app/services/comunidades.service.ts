import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComunidadesService {

  url = 'https://basedatosapiproyecto.netlify.app/comunidad';
  constructor(private http:HttpClient) { }

  getComunidades(){
    return this.http.get(`${this.url}`);
  }

  getComunidad(comunidad:string){
    return this.http.get(`${this.url}/id/${comunidad}`);
  }

  addComunidad(comunidad:Comunidad){
    return this.http.post(`${this.url}`,comunidad);
  }

  updateComunidad(id:any,comunidad:Comunidad){
    return this.http.put(`${this.url}/${id}`,comunidad);
  }

  deleteComunidad(id:string){
    return this.http.delete(`${this.url}/${id}`);
  }

  buscarComunidad(comunidad:string){
    return this.http.get(`${this.url}/${comunidad}`);
  }

}

export interface Comunidad{
  codcomunidad?:number;
  comunidad?:string;
  coddepto?:string;
  codmuni?:string;

}

