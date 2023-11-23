// filter-by-nombre.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByNombreLabor'
})
export class FilterByNombreLabor implements PipeTransform {
  transform(items: any[], filtroNombre: string): any[] {
    if (!filtroNombre || filtroNombre.trim() === '') {
      return items;
    }

    return items.filter(item => item.LAB_NOMBRE.toLowerCase().includes(filtroNombre.toLowerCase()));
  }
}
