import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoComponent } from './components/producto/producto.component';
import { appRouting } from "./app.routes";

import { InformacionService } from "./services/informacion.service";
import { ProductosService } from "./services/productos.service";
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ProductoComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouting
  ],
  providers: [
    InformacionService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
