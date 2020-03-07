import { Pipe, PipeTransform } from '@angular/core';
import * as cpf from "@fnando/cpf"

@Pipe({
  name: 'isCPF'
})
export class IsCPFPipe implements PipeTransform {

  transform(value: string): boolean {

    if(value)

    return cpf.isValid(value);
  }

}
