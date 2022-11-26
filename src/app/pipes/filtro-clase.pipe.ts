import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroClase'
})
export class FiltroClasePipe implements PipeTransform {

 transform(list: [], support: string): any {
  // console.log(list);
  //  console.log(support);
   if (!support) {
    return list
   }
   const listaFiltrada = list.filter(linea=>(linea['linea']))
  //  const listaFiltrada = list.filter(linea=>(linea['linea']).includes(support))
  // return listaFiltrada
   
   console.log(listaFiltrada);
   
  return list
 }
}
