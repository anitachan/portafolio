import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  cargadaSobreNosotros:boolean = false;
  equipo:any = [];

  constructor(public http:Http) {
    this.cargainfo();
    this.cargaSobreNosotros();
   }

   public cargainfo(){
    this.http.get("assets/data/info.pagina.json")
    .subscribe( data => {
      //console.log(data.json());
      this.cargada = true;
      this.info = data.json();
    })
   }

   public cargaSobreNosotros(){
    this.http.get("https://portafolio-4c8a0.firebaseio.com/equipo.json")
    .subscribe( data => {
      console.log(data.json());
      this.cargadaSobreNosotros = true;
      this.info = data.json();
    })
   }
}
