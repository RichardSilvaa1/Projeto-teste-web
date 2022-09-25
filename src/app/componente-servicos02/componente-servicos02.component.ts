import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-componente-servicos02',
  templateUrl: './componente-servicos02.component.html',
  styleUrls: ['./componente-servicos02.component.css']
})
export class ComponenteServicos02Component{

endereco = "";

constructor(public logger: LoggerService){}

adicionarEndereco(){
 this.logger.logar(`O Endereço ${this.endereco} foi adicionado`);
}

}

  

