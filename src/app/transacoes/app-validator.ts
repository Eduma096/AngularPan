import { IsCPFPipe } from '../pipe/is-cpf.pipe';
import { AbstractControl } from '@angular/forms';


export class AppValidator{
    static cpfValidator(Control: AbstractControl){
        return new IsCPFPipe().transform(Control.value) ? null : {cpf: 'cpf inválido'}
    }
}