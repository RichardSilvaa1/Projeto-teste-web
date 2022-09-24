import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoCompornenteComponent } from './segundo-compornente/segundo-compornente.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoCompornenteComponent,
    MultiplicaPorPipe,
    PipeCustomizadoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
