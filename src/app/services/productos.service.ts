import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any = [];
  cargando:boolean = false;

  constructor(private http:Http) { 
    this.cargaProductos();
  }

  public cargaProductos(){

    this.cargando = true;
    if(this.productos.length === 0)
      {
        this.http.get("https://portafolio-4c8a0.firebaseio.com/productos_idx.json")
        .subscribe( data => {
          //console.log(data.json());
          this.cargando = false;
          this.productos = data.json();
        })
      }
   }

}
