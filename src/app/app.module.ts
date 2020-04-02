import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LibrosComponent } from './libros/libros.component';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';

const rutas:Routes = [
  { path: 'listado-libros', component:LibrosComponent },
//  { path: 'sobre-nosotros', component:SobreNosotrosComponent },
  { path: 'informacion/:libroId', component:InformacionComponent },
  { path: 'informacion', redirectTo: '/' },
  { path: '', component:InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
]

//crear un componente q maneje los errores y muestre un mensaje

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    SobreNosotrosComponent,
    LibrosComponent,
    InicioComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
