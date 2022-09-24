import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-compornente',
  templateUrl: './segundo-compornente.component.html',
  styleUrls: ['./segundo-compornente.component.css']
})
export class SegundoCompornenteComponent  {

   nome = "Richard";
   idade = 30;
   urlImagem = "/assets/Ariadne.png"
   MostrarDataNascimento (){
    alert (`A idade da Ariadne é:  ${this.idade}`)
   }

}
