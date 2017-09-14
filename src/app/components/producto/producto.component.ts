import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {

  producto:any = undefined;
  cod:string = undefined;

  constructor(private route:ActivatedRoute, private _productosService:ProductosService) { 
    route.params.subscribe(
      parametro => {
        //console.log(parametro);
        //console.log(parametro['id']);
        _productosService.cargaProducto(parametro['id'])
        .subscribe( res => {
          this.producto = res.json();
          this.cod = parametro['id'];
          //console.log(this.producto);
        });
      }
    )
  }
}
