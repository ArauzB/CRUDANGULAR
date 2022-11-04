import { Component, OnInit } from '@angular/core';
import { Comunidad, ComunidadesService } from '../../services/comunidades.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  depto? = [""];
  departamento? :string ;


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

  setState(){
    if(this.departamento == "1")
    {
      this.depto = ["Selecciones Municipio","Guatemala", "Santa Catarina Pinula", "San Jose Pinula", "San Jose del Golfo", "Palencia", "Chinautla", "San Pedro Ayampuc", "Mixco", "San Pedro Sacatepequez", "San Juan Sacatepequez", "San Raymundo", "Chuarrancho", "Fraijanes", "Amatitlan", "Villa Nueva", "Villa Canales", "San Miguel Petapa"];
    }
  
    if(this.departamento == "2")
    {
      this.depto = ["Selecciones Municipio", "Guastatoya", "Morazan", "San Agustin Acasaguastlan", "San Cristobal Acasaguastlan", "El Jicaro", "Sansare", "Sanarate", "San Antonio La Paz"];
    }
  
    if(this.departamento == "3")
    {
      this.depto = [ "Selecciones Municipio", "Antigua Guatemala", "Jocotenango", "Pastores", "Sumpango", "Santo Domingo Xenacoj", "Santiago Sacatepequez", "San Bartolome Milpas Altas", "San Lucas Sacatepequez", "Santa Lucia Milpas Altas", "Magdalena Milpas Altas", "Santa Maria de Jesus", "Ciudad Vieja", "San Miguel Dueñas", "Alotenango", "San Antonio Aguas Calientes", "Santa Catarina Barahona"];
    }
  
    if(this.departamento == "4")
    {
      this.depto = [ "Selecciones Municipio", "Chimaltenango", "San Jose Poaquil", "San Martin Jilotepeque", "San Juan Comalapa", "Santa Apolonia", "Tecpan", "Patzun", "Pochuta", "Patzicia", "Santa Cruz Balanyá", "Acatenango", "San Pedro Yepocapa", "San Andres Itzapa", "Parramos", "Zaragoza", "El Tejar"];
    }
  
    if(this.departamento == "5")
    {
      this.depto = [ "Selecciones Municipio", "Escuintla", "Santa Lucia Cotzumalguapa", "La Democracia", "Siquinala", "Masagua", "Tiquisate", "La Gomera", "Guanagazapa", "San Jose", "Iztapa", "Palin", "San Vicente Pacaya", "Nueva Concepcion"];
    }
  
    if(this.departamento == "6")
    {
      this.depto = [ "Selecciones Municipio", "Cuilapa", "Barberena", "Santa Rosa de Lima", "Casillas", "San Rafael las Flores", "Oratorio", "San Juan Tecuaco", "Chiquimula", "Taxisco", "Santa Maria Ixhuatan", "Guazacapan", "Santa Cruz Balanyá", "Pueblo Nuevo Viñas", "Nueva Santa Rosa"];
    }
  
    if(this.departamento == "7")
    {
      this.depto = ["Selecciones Municipio", "Solola", "San Jose Chacaya", "Santa Maria Visitacion", "Santa Lucía Utatlán", "Nahualá", "Santa Catarina Ixtahuacán", "Santa Clara La Laguna", "Concepción", "San Andrés Semetabaj", "Panajachel", "Santa Catarina Palopo", "San Antonio Palopo", "San  Lucas Toliman", "Santa Cruz la Laguna", "San Pablo La Laguna", "San Marcos la Laguna", "San Juan la Laguna","San Pedro la Laguna","Santiago Atitlan"];
    }
  
    if(this.departamento == "8")
    {
      this.depto = [ "Selecciones Municipio", "Totonicapan", "San Cristobal Totonicapan", "San Francisco El Alto", "San Andres Xecul", "Momostenango", "Santa Maria Chiquimula", "Santa Lucia La Reforma", "San Bartolome Jocotenango"];
    }
  
    if(this.departamento == "9")
    {
      this.depto = [ "Selecciones Municipio", "Quetzaltenango", "Salcaja", "Olintepeque", "San Carlos Sija", "Sibilia", "Cabrican", "Cajola", "San Miguel Siguila", "Ostuncalco", "San Mateo", "Concepcion Chiquirichapa", "San Martin Sacatepequez", "Almolonga", "Cantel", "Huitan", "Zunil", "Colomba", "San Francisco La Union", "El Palmar", "Coatepeque", "Genova", "Flores Costa Cuca", "La Esperanza", "Palestina de Los Altos"];
    }
  
    if(this.departamento == "10")
    {
      this.depto = ["Selecciones Municipio", "Mazatenango", "Cuyotenango", "San Francisco Zapotitlan", "San Bernardino", "San Jose El Idolo", "Santo Domingo Suchitepequez", "San Lorenzo", "Samayac", "San Pablo Jocopilas", "San Antonio Suchitepequez", "San Miguel Panan", "San Gabriel", "Chicacao", "Patulul", "Santa Barbara", "San Juan Bautista", "Santo Tomas La Union", "Zunilito", "Pueblo Nuevo", "Rio Bravo"];
    }
  
    if(this.departamento == "11")
    {
      this.depto = ["Selecciones Municipio", "Retalhuleu", "San Sebastian", "Santa Cruz Muluá", "San Martin Zapotitlan", "San Felipe", "San Andres Villa Seca", "Champerico", "Nuevo San Carlos", "El Asintal"];
    }
  
    if(this.departamento == "12")
    {
      this.depto = ["Selecciones Municipio", "San Marcos", "San Pedro Sacatepequez", "San Antonio Sacatepequez", "Comitancillo", "San Miguel Ixtahuacan", "Concepcion Tutuapa", "Tacaná", "Sibinal", "Tajumulco", "Tejutla", "San Rafael Pie de la Cuesta", "Nuevo Progreso", "El Tumbador", "San Jose El Rodeo", "Malacatan", "Catarina", "Ayutla", "Ocos", "San Pablo", "El Quetzal", "La Reforma", "Pajapita", "Ixchiguán", "San Jose Ojetenam", "San Cristobal Cucho", "Sipacapa", "Esquipulas Palo Gordo", "Rio Blanco", "San Lorenzo"];
    }
  
    if(this.departamento == "13")
    {
      this.depto = ["Selecciones Municipio", "Huehuetenango", "Chiantla", "Malacatancito", "Cuilco", "Nentón", "San Pedro Necta", "Jacaltenango", "Soloma", "San Ildefonso Ixtahuacan", "Santa Barbara", "La Libertad", "La Democracia", "San Miguel Acatan", "San Rafael La Independencia", "Todos Santos Cuchumatan" ,"San Juan Atitan", "Santa Eulalia", "San Mateo Ixtatan", "Colotenango", "San Sebastián Huehuetenango", "Tectitan", "Concepcion Huista", "San Juan Ixcoy", "San Antonio Huista", "San Sebastián Coatán", "Barillas", "Aguacatan", "San Rafael Petzal", "San Gaspar Ixchil", "Santiago Chimaltenango", "Santa Ana Huista"];
    }
  
    if(this.departamento == "14")
    {
      this.depto = ["Selecciones Municipio", "Santa Cruz del Quiche", "Chiche", "Chinique", "Zacualpa", "Chajul", "Chiché", "Chichicastenango", "Patzité", "San Antonio Ilotenango", "San Pedro Jocopilas", "Cunén", "San Juan Cotzal", "Joyabaj", "Nebaj", "San Andres Sajcabaja", "Uspantan", "Sacapulas", "San Bartolome Jocotenango", "Canillá", "Chicaman", "Ixcan", "Pachalum"];
    }
  
    if(this.departamento == "15")
    {
      this.depto = ["Selecciones Municipio", "Salama", "San Miguel Chicaj", "Rabinal", "Cubulco", "Granados", "El Chol", "San Jeronimo", "Purulha"];
    }
  
    if(this.departamento == "16")
    {
      this.depto = ["Selecciones Municipio", "Coban", "Santa Cruz Verapaz", "San Cristobal Verapaz", "Tactic", "Tamahú", "Tucurú", "Panzós", "Senahú", "San Pedro Carchá", "San Juan Chamelco", "Lanquín", "Cahabon", "Chisec", "Chahal", "Fray Bartolome de las Casas", "Santa Catalina La Tinta"];
    }
  
    if(this.departamento == "17")
    {
      this.depto = ["Selecciones Municipio", "Flores", "San Jose", "San Benito", "San Andres", "La Libertad", "San Francisco", "Santa Ana", "Dolores", "San Luis", "Sayaxche", "Melchor de Mencos", "Poptún"];
    }
  
    if(this.departamento == "18")
    {
      this.depto = ["Selecciones Municipio", "Puerto Barrios", "Livingston", "El Estor", "Morales", "Los Amates"];
    }
  
    if(this.departamento == "19")
    {
      this.depto = ["Selecciones Municipio", "Zacapa", "Estanzuela", "Río Hondo", "Gualán", "Teculután", "Usumatlán", "Cabañas", "San Diego", "La Unión", "Huité"];
    }
  
    if(this.departamento == "20")
    {
      this.depto = ["Selecciones Municipio", "Chiquimula", "San José La Arada", "San Juan Ermita", "Jocotán", "Camotán", "Olopa", "Esquipulas", "Concepción Las Minas", "Quezaltepeque", "San Jacinto", "Ipala"];
    }
  
    if(this.departamento == "21")
    {
      this.depto = ["Selecciones Municipio", "Jalapa", "San Pedro Pinula", "San Luis Jilotepeque", "San Manuel Chaparrón", "San Carlos Alzatate", "Monjas", "Mataquescuintla"];
    }
  
    if(this.departamento == "22")
    {
      this.depto = ["Selecciones Municipio", "Jutiapa", "El Progreso", "Santa Catarina Mita", "Agua Blanca", "Asunción Mita", "Yupiltepeque", "Atescatempa", "Jerez", "El Adelanto", "Zapotitlán", "Comapa", "Jalpatagua", "Conguaco", "Moyuta", "Pasaco", "San José Acatempa", "Quesada"];
    }
  
  
  }









}
