// filter-by-tipo-labor.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTipoLabor'
})
export class FilterByTipoLabor implements PipeTransform {
  transform(items: any[], idLabor?: string): any[] {
    if (!idLabor || idLabor.trim() === '0') {
      return items;
    }

    const idLaborNumerico: number = +idLabor; // Convertir a número

    return items.filter(item => item.TL_ID === idLaborNumerico);
  }
}
