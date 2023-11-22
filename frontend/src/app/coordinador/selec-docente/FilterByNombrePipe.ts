// filter-by-nombre.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByNombre'
})
export class FilterByNombrePipe implements PipeTransform {
  transform(items: any[], filtroNombre: string): any[] {
    if (!filtroNombre || filtroNombre.trim() === '') {
      return items;
    }

    return items.filter(item => item.nombre.toLowerCase().includes(filtroNombre.toLowerCase()));
  }
}
