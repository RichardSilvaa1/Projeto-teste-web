import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicaPor'
})
export class MultiplicaPorPipe implements PipeTransform {

  transform(valor: number, multiplica: number): unknown {
    var soma = valor;
    if(valor == 2){
    soma = valor* multiplica;
  } 
  return soma;

}
}
