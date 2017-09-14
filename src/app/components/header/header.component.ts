import { Component, OnInit } from '@angular/core';
import { InformacionService } from "../../services/informacion.service";
import { ProductosService } from "../../services/productos.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  constructor(private _informacionService:InformacionService, private route:Router, private _productosService:ProductosService){

  }

  buscarProducto(termino:string){
    //console.log(termino);
    this.route.navigate(['buscar',termino]);
    
  }
}
