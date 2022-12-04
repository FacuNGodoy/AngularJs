import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroClase'
})
export class FiltroClasePipe implements PipeTransform {

 transform(list: any, support: string): any {
    
   if (!support) {
    return list
   }

  const listaFiltrada = list.filter((linea:any)=>linea.line.includes(support))

  return listaFiltrada
   
 }
}
