import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busca'
})
export class BuscaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
