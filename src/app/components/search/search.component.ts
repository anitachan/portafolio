import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  termino:string = undefined;

  constructor(private route:ActivatedRoute, private _productosService:ProductosService) {
    route.params.subscribe(
      parametro => {
       this.termino = parametro['termino'];
       console.log(this.termino);
       this._productosService.buscarProducto(this.termino);
      }
    )
   }



}
