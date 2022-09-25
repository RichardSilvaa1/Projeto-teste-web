import { Component, OnInit } from '@angular/core';
import { Celular } from '../type/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent  {

  celulares: Celular[] = [
    { id: 1 , nome: "Iphone 14",descricao: "Iphone 64 GB", esgotado: false },
    { id: 2 , nome: "Iphone XR",descricao: "Iphone 124 GB", esgotado: true },
    { id: 3 , nome: "Iphone Pro Max",descricao: "Iphone 420 GB", esgotado: false }
  ]

}
