import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComunidadesService {

  url = 'https://basedatosapi.netlify.app';
  constructor(private http:HttpClient) { }

  getComunidades(){
    return this.http.get(`${this.url}/comunidad/`);
  }

  getComunidad(comunidad:string){
    return this.http.get(`${this.url}/comunidad/id/${comunidad}`);
  }

  addComunidad(comunidad:Comunidad){
    return this.http.post(`${this.url}/comunidad/`,comunidad);
  }

  updateComunidad(id:any,comunidad:Comunidad){
    return this.http.put(`${this.url}/comunidad/${id}`,comunidad);
  }

  deleteComunidad(id:string){
    return this.http.delete(`${this.url}/comunidad/${id}`);
  }

  buscarComunidad(comunidad:string){
    return this.http.get(`${this.url}/comunidad/${comunidad}`);
  }

  distrito(id:string){
    return this.http.get(`${this.url}/distrito/${id}`);
  }

  nodistrito(id:string){
    return this.http.get(`${this.url}/distrito--/${id}`);
  }

  comuddepto(id:string){
    return this.http.get(`${this.url}/departamento-comunidad/${id}`);
  }

  comudistrito(id:string){
    return this.http.get(`${this.url}/distrito-comunidad/${id}`);
  }


}

export interface Comunidad{
  codcomunidad?:number;
  comunidad?:string;
  coddepto?:string;
  codmuni?:string;
  coddistrito?:string;
}

export interface departamento{
  departamento?:string;
  comunidad?:string;
}

export interface municipio{
  municipio?:string;
  comunidad?:string;
}
