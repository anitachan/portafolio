import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any = [];
  productosFiltro:any = [];
  cargando:boolean = false;

  constructor(private http:Http) { 
    this.cargaProductos();
  }

  public cargaProductos(){

    this.cargando = true;
    if(this.productos.length === 0)
      {

        let promesa = new Promise( (resolve, reject) =>{
          this.http.get("https://portafolio-4c8a0.firebaseio.com/productos_idx.json")
          .subscribe( data => {
            //console.log(data.json());
            this.cargando = false;
            this.productos = data.json();
            resolve();
          })
        })
        return promesa;
        
      }
   }

   public cargaProducto(codigo:string){
    return this.http.get(`https://portafolio-4c8a0.firebaseio.com/productos/${codigo}.json`);
  }

  public buscarProducto(termino:string){
    console.log("buscando producto");

    if(this.productos.length === 0 ){
      this.cargaProductos().then( () => {
        this.filtrarTerminos(termino);
      })
    }
    else{
      this.filtrarTerminos(termino);
    }
  }

  private filtrarTerminos(termino:string){

    this.productosFiltro = [];
    termino = termino.toLowerCase();
    this.productos.forEach(prod => {
      if(prod.categoria.toLowerCase().indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0){
        this.productosFiltro.push(prod);
        //console.log(prod);
      } 
    });
  }

}
