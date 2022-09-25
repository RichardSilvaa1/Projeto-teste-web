import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-componente-servicos1',
  templateUrl: './componente-servicos1.component.html',
  styleUrls: ['./componente-servicos1.component.css']
})
export class ComponenteServicos1Component  {

   nome = "";

   constructor(public logger : LoggerService){}
 
adicionarNome(){
  this.logger.logar(`O nome ${this.nome} foi adicionado`);
}

  }


